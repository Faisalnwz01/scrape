const _ = require('lodash');
const request = require('request');
const cheerio = require('cheerio');
const parseAll = require('html-metadata').parseAll;


/**
 * A basic Hello World function
 * @param {string} url Who you're saying hello to
 * @returns {string}
 */
module.exports = (url = 'world', context, callback) => {
  console.log(context.params)
  var url = context.params.url;
  var query = context.params.query || 'a';
  var userAgent = context.params.userAgent;
  var options = {
    url: url,
    headers: {
      'User-Agent': userAgent || 'stdlib/request/scraper v0.1'
    }
  };
  request(options, function (err, response, body) {
    if (err) return callback(err)
    if (response.statusCode !== 200) return callback(null, body);
    var $ = cheerio.load(body);

    parseAll($, (err, metadata) => {
      if (err) return callback(err);

      var result = {
        metadata: metadata
      };

      function performQuery(q) {
        var pdfArray = [];
        if (!q) return null;
        if (!q.length && !_.isObject(q)) return null;
        var queryMatcher = q;

        if (_.isObject(q)) {
          queryMatcher = q.match;
        }
        $('a').map(function (i, link) {
          var href = $(link).attr('href');
          if (href) {
            if (!href.match('.pdf') || href.length < 5) return
            // geocode API
            pdfArray.push({
              // 'PDFlink': domain + '/courts/2jd/kings/Civil/' + href,
              'PDFlink': `https://www.nycourts.gov/courts/2jd/kings/civil/${href}`,
              'address': href.split('/')[2].replace(/-/g, ' ').replace(/.pdf/g, '') + ', Brooklyn, Ny',
              'week': href.split('/')[1],
              'auction_date': new Date($('strong').slice(2).eq(0).text().split('DATE IS ')[1]),
              'time': $('strong').slice(0).eq(0).text().split(' in ')[0],
              'room': $('strong').slice(0).eq(0).text().split(' in ')[1]
            });
          }
        });
        return pdfArray;
      }

      result.url = url;

      if (_.isArray(query)) {
        result.query = [];
        result.query_value = [];
        result.query_error = [];

        _.each(query, (q) => {
          try {
            let data = performQuery(q);
            result.query.push(q);
            result.query_value.push(data);
          } catch (e) {
            result.query_error.push(e && e.message || e)
          };
        });

      } else if (query && query.length) {
        result.query = query;
        try {
          result.query_value = performQuery(query);
        } catch (e) {
          result.query_error = e && e.message || e;
        }
      }

      return callback(null, result);
    });
  });

};