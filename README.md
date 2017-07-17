# Scraper for nyc foreclosure properties 
[![stdlib service](http://badge.stdlib.com/service/?service=scrapeNycProp&username=faisalnwz01&version=0.0.0)](https://stdlib.com/services/faisalnwz01/scrapeNycProp)

This is a scraper function that automatically pulls in [metadata](https://github.com/wikimedia/html-metadata) from the page, as well as supports simple HTML querying using [cheerio](https://github.com/cheeriojs/cheerio).

It's built on top of [stdlib](https://stdlib.com) which makes it highly distributed and scalable.

## Usage

You can either use the ready service that's deployed on stdlib [here](http://stdlib.com/services/faisalnwz01/scrapeNycProp), or fork this repository and launch your own version on [stdlib](https://stdlib.com).

### Example

This is optimized to scrape foreclosure properties from NYC courts website:

```bash
 lib faisalnwz01.scrapeNycProp[@dev] 'https://www.nycourts.gov/courts/2jd/kings/civil/foreclosuresales.shtml' 'a'
```

```javascript
{
  "metadata": {
    "general": {
      "author": "New York State Unified Court System",
      "description": "The official home page of the New York State Unified Court System. We hear more than three million cases a year involving almost every type of endeavor. We hear family matters, personal injury claims, commercial disputes, trust and estates issues, criminal cases, and landlord-tenant cases.",
      "robots": "index,follow",
      "title": "Kings County Supreme - Civil Term, 2nd JD - Foreclosure Sales"
    }
  },
  "url": "https://www.nycourts.gov/courts/2jd/kings/civil/foreclosuresales.shtml",
  "query": "a",
  "query_value": [
    {
      "PDFlink": "https://www.nycourts.gov/courts/2jd/kings/civil/foreclosures/Week9/106-Marcus-Garvey-Boulevard.pdf",
      "address": "106 Marcus Garvey Boulevard, Brooklyn, Ny",
      "week": "Week9",
      "auction_date": "2017-07-20T00:00:00.000Z",
      "time": "Thursday afternoons at 2:30 p.m.",
      "room": "Room 224 "
    },
    {
      "PDFlink": "https://www.nycourts.gov/courts/2jd/kings/civil/foreclosures/Week9/114-Miller-Avenue.pdf",
      "address": "114 Miller Avenue, Brooklyn, Ny",
      "week": "Week9",
      "auction_date": "2017-07-20T00:00:00.000Z",
      "time": "Thursday afternoons at 2:30 p.m.",
      "room": "Room 224 "
    },
    {
      "PDFlink": "https://www.nycourts.gov/courts/2jd/kings/civil/foreclosures/Week9/1165-East-80th-Street.pdf",
      "address": "1165 East 80th Street, Brooklyn, Ny",
      "week": "Week9",
      "auction_date": "2017-07-20T00:00:00.000Z",
      "time": "Thursday afternoons at 2:30 p.m.",
      "room": "Room 224 "
    },
    {
      "PDFlink": "https://www.nycourts.gov/courts/2jd/kings/civil/foreclosures/Week9/117-Herzl-Street.pdf",
      "address": "117 Herzl Street, Brooklyn, Ny",
      "week": "Week9",
      "auction_date": "2017-07-20T00:00:00.000Z",
      "time": "Thursday afternoons at 2:30 p.m.",
      "room": "Room 224 "
    },
    {
      "PDFlink": "https://www.nycourts.gov/courts/2jd/kings/civil/foreclosures/Week9/1267-East-59th-Street.pdf",
      "address": "1267 East 59th Street, Brooklyn, Ny",
      "week": "Week9",
      "auction_date": "2017-07-20T00:00:00.000Z",
      "time": "Thursday afternoons at 2:30 p.m.",
      "room": "Room 224 "
    },
    {
      "PDFlink": "https://www.nycourts.gov/courts/2jd/kings/civil/foreclosures/Week9/1325-East-89th-Street.pdf",
      "address": "1325 East 89th Street, Brooklyn, Ny",
      "week": "Week9",
      "auction_date": "2017-07-20T00:00:00.000Z",
      "time": "Thursday afternoons at 2:30 p.m.",
      "room": "Room 224 "
    },
    {
      "PDFlink": "https://www.nycourts.gov/courts/2jd/kings/civil/foreclosures/Week9/134-Glen-Street.pdf",
      "address": "134 Glen Street, Brooklyn, Ny",
      "week": "Week9",
      "auction_date": "2017-07-20T00:00:00.000Z",
      "time": "Thursday afternoons at 2:30 p.m.",
      "room": "Room 224 "
    },
    {
      "PDFlink": "https://www.nycourts.gov/courts/2jd/kings/civil/foreclosures/Week9/1369-East-27th-Street.pdf",
      "address": "1369 East 27th Street, Brooklyn, Ny",
      "week": "Week9",
      "auction_date": "2017-07-20T00:00:00.000Z",
      "time": "Thursday afternoons at 2:30 p.m.",
      "room": "Room 224 "
    },
    {
      "PDFlink": "https://www.nycourts.gov/courts/2jd/kings/civil/foreclosures/Week9/1396-East-92nd-Street.pdf",
      "address": "1396 East 92nd Street, Brooklyn, Ny",
      "week": "Week9",
      "auction_date": "2017-07-20T00:00:00.000Z",
      "time": "Thursday afternoons at 2:30 p.m.",
      "room": "Room 224 "
    },
    {
      "PDFlink": "https://www.nycourts.gov/courts/2jd/kings/civil/foreclosures/Week9/1420-Saint-Marks-Avenue.pdf",
      "address": "1420 Saint Marks Avenue, Brooklyn, Ny",
      "week": "Week9",
      "auction_date": "2017-07-20T00:00:00.000Z",
      "time": "Thursday afternoons at 2:30 p.m.",
      "room": "Room 224 "
    },
    {
      "PDFlink": "https://www.nycourts.gov/courts/2jd/kings/civil/foreclosures/Week9/1512-Nostrand-Avenue.pdf",
      "address": "1512 Nostrand Avenue, Brooklyn, Ny",
      "week": "Week9",
      "auction_date": "2017-07-20T00:00:00.000Z",
      "time": "Thursday afternoons at 2:30 p.m.",
      "room": "Room 224 "
    },
    {
      "PDFlink": "https://www.nycourts.gov/courts/2jd/kings/civil/foreclosures/Week9/1607-Pacific-Street.pdf",
      "address": "1607 Pacific Street, Brooklyn, Ny",
      "week": "Week9",
      "auction_date": "2017-07-20T00:00:00.000Z",
      "time": "Thursday afternoons at 2:30 p.m.",
      "room": "Room 224 "
    },
    {
      "PDFlink": "https://www.nycourts.gov/courts/2jd/kings/civil/foreclosures/Week9/1631-East-95th-Street.pdf",
      "address": "1631 East 95th Street, Brooklyn, Ny",
      "week": "Week9",
      "auction_date": "2017-07-20T00:00:00.000Z",
      "time": "Thursday afternoons at 2:30 p.m.",
      "room": "Room 224 "
    },
    {
      "PDFlink": "https://www.nycourts.gov/courts/2jd/kings/civil/foreclosures/Week9/1746-Bergen-Street.pdf",
      "address": "1746 Bergen Street, Brooklyn, Ny",
      "week": "Week9",
      "auction_date": "2017-07-20T00:00:00.000Z",
      "time": "Thursday afternoons at 2:30 p.m.",
      "room": "Room 224 "
    },
    {
      "PDFlink": "https://www.nycourts.gov/courts/2jd/kings/civil/foreclosures/Week9/200-Albany-Ave.pdf",
      "address": "200 Albany Ave, Brooklyn, Ny",
      "week": "Week9",
      "auction_date": "2017-07-20T00:00:00.000Z",
      "time": "Thursday afternoons at 2:30 p.m.",
      "room": "Room 224 "
    },
    {
      "PDFlink": "https://www.nycourts.gov/courts/2jd/kings/civil/foreclosures/Week9/2133-East-71-Street.pdf",
      "address": "2133 East 71 Street, Brooklyn, Ny",
      "week": "Week9",
      "auction_date": "2017-07-20T00:00:00.000Z",
      "time": "Thursday afternoons at 2:30 p.m.",
      "room": "Room 224 "
    },
    {
      "PDFlink": "https://www.nycourts.gov/courts/2jd/kings/civil/foreclosures/Week9/2227-Pitkin-Avenue.pdf",
      "address": "2227 Pitkin Avenue, Brooklyn, Ny",
      "week": "Week9",
      "auction_date": "2017-07-20T00:00:00.000Z",
      "time": "Thursday afternoons at 2:30 p.m.",
      "room": "Room 224 "
    },
    {
      "PDFlink": "https://www.nycourts.gov/courts/2jd/kings/civil/foreclosures/Week9/2388-Nostrand-Avenue.pdf",
      "address": "2388 Nostrand Avenue, Brooklyn, Ny",
      "week": "Week9",
      "auction_date": "2017-07-20T00:00:00.000Z",
      "time": "Thursday afternoons at 2:30 p.m.",
      "room": "Room 224 "
    },
    {
      "PDFlink": "https://www.nycourts.gov/courts/2jd/kings/civil/foreclosures/Week9/2401-Avenue-N.pdf",
      "address": "2401 Avenue N, Brooklyn, Ny",
      "week": "Week9",
      "auction_date": "2017-07-20T00:00:00.000Z",
      "time": "Thursday afternoons at 2:30 p.m.",
      "room": "Room 224 "
    },
    {
      "PDFlink": "https://www.nycourts.gov/courts/2jd/kings/civil/foreclosures/Week9/25-Hart-Street.pdf",
      "address": "25 Hart Street, Brooklyn, Ny",
      "week": "Week9",
      "auction_date": "2017-07-20T00:00:00.000Z",
      "time": "Thursday afternoons at 2:30 p.m.",
      "room": "Room 224 "
    },
    {
      "PDFlink": "https://www.nycourts.gov/courts/2jd/kings/civil/foreclosures/Week9/280-Etna-Street.pdf",
      "address": "280 Etna Street, Brooklyn, Ny",
      "week": "Week9",
      "auction_date": "2017-07-20T00:00:00.000Z",
      "time": "Thursday afternoons at 2:30 p.m.",
      "room": "Room 224 "
    },
    {
      "PDFlink": "https://www.nycourts.gov/courts/2jd/kings/civil/foreclosures/Week9/30-East-29th-Street.pdf",
      "address": "30 East 29th Street, Brooklyn, Ny",
      "week": "Week9",
      "auction_date": "2017-07-20T00:00:00.000Z",
      "time": "Thursday afternoons at 2:30 p.m.",
      "room": "Room 224 "
    },
    {
      "PDFlink": "https://www.nycourts.gov/courts/2jd/kings/civil/foreclosures/Week9/32-East-55th-Street.pdf",
      "address": "32 East 55th Street, Brooklyn, Ny",
      "week": "Week9",
      "auction_date": "2017-07-20T00:00:00.000Z",
      "time": "Thursday afternoons at 2:30 p.m.",
      "room": "Room 224 "
    },
    {
      "PDFlink": "https://www.nycourts.gov/courts/2jd/kings/civil/foreclosures/Week9/332-Feinmore-Street.pdf",
      "address": "332 Feinmore Street, Brooklyn, Ny",
      "week": "Week9",
      "auction_date": "2017-07-20T00:00:00.000Z",
      "time": "Thursday afternoons at 2:30 p.m.",
      "room": "Room 224 "
    },
    {
      "PDFlink": "https://www.nycourts.gov/courts/2jd/kings/civil/foreclosures/Week9/335-Lott-Avenue.pdf",
      "address": "335 Lott Avenue, Brooklyn, Ny",
      "week": "Week9",
      "auction_date": "2017-07-20T00:00:00.000Z",
      "time": "Thursday afternoons at 2:30 p.m.",
      "room": "Room 224 "
    },
    {
      "PDFlink": "https://www.nycourts.gov/courts/2jd/kings/civil/foreclosures/Week9/3802-15th-Avenue,-Unit-15.pdf",
      "address": "3802 15th Avenue, Unit 15, Brooklyn, Ny",
      "week": "Week9",
      "auction_date": "2017-07-20T00:00:00.000Z",
      "time": "Thursday afternoons at 2:30 p.m.",
      "room": "Room 224 "
    },
    {
      "PDFlink": "https://www.nycourts.gov/courts/2jd/kings/civil/foreclosures/Week9/4220-Third-Avenue.pdf",
      "address": "4220 Third Avenue, Brooklyn, Ny",
      "week": "Week9",
      "auction_date": "2017-07-20T00:00:00.000Z",
      "time": "Thursday afternoons at 2:30 p.m.",
      "room": "Room 224 "
    },
    {
      "PDFlink": "https://www.nycourts.gov/courts/2jd/kings/civil/foreclosures/Week9/4406-Snyder-Avenue.pdf",
      "address": "4406 Snyder Avenue, Brooklyn, Ny",
      "week": "Week9",
      "auction_date": "2017-07-20T00:00:00.000Z",
      "time": "Thursday afternoons at 2:30 p.m.",
      "room": "Room 224 "
    },
    {
      "PDFlink": "https://www.nycourts.gov/courts/2jd/kings/civil/foreclosures/Week9/469-Wyona-Street.pdf",
      "address": "469 Wyona Street, Brooklyn, Ny",
      "week": "Week9",
      "auction_date": "2017-07-20T00:00:00.000Z",
      "time": "Thursday afternoons at 2:30 p.m.",
      "room": "Room 224 "
    },
    {
      "PDFlink": "https://www.nycourts.gov/courts/2jd/kings/civil/foreclosures/Week9/509-East-56th-Street-and-1597-Nostrand-Avenue.pdf",
      "address": "509 East 56th Street and 1597 Nostrand Avenue, Brooklyn, Ny",
      "week": "Week9",
      "auction_date": "2017-07-20T00:00:00.000Z",
      "time": "Thursday afternoons at 2:30 p.m.",
      "room": "Room 224 "
    },
    {
      "PDFlink": "https://www.nycourts.gov/courts/2jd/kings/civil/foreclosures/Week9/617-Troy-Avenue.pdf",
      "address": "617 Troy Avenue, Brooklyn, Ny",
      "week": "Week9",
      "auction_date": "2017-07-20T00:00:00.000Z",
      "time": "Thursday afternoons at 2:30 p.m.",
      "room": "Room 224 "
    },
    {
      "PDFlink": "https://www.nycourts.gov/courts/2jd/kings/civil/foreclosures/Week9/678-Lexington-Avenue.pdf",
      "address": "678 Lexington Avenue, Brooklyn, Ny",
      "week": "Week9",
      "auction_date": "2017-07-20T00:00:00.000Z",
      "time": "Thursday afternoons at 2:30 p.m.",
      "room": "Room 224 "
    },
    {
      "PDFlink": "https://www.nycourts.gov/courts/2jd/kings/civil/foreclosures/Week9/719-East-95th-Street.pdf",
      "address": "719 East 95th Street, Brooklyn, Ny",
      "week": "Week9",
      "auction_date": "2017-07-20T00:00:00.000Z",
      "time": "Thursday afternoons at 2:30 p.m.",
      "room": "Room 224 "
    },
    {
      "PDFlink": "https://www.nycourts.gov/courts/2jd/kings/civil/foreclosures/Week9/724-Wortman-Avenue.pdf",
      "address": "724 Wortman Avenue, Brooklyn, Ny",
      "week": "Week9",
      "auction_date": "2017-07-20T00:00:00.000Z",
      "time": "Thursday afternoons at 2:30 p.m.",
      "room": "Room 224 "
    },
    {
      "PDFlink": "https://www.nycourts.gov/courts/2jd/kings/civil/foreclosures/Week9/737-Hancock-Street.pdf",
      "address": "737 Hancock Street, Brooklyn, Ny",
      "week": "Week9",
      "auction_date": "2017-07-20T00:00:00.000Z",
      "time": "Thursday afternoons at 2:30 p.m.",
      "room": "Room 224 "
    },
    {
      "PDFlink": "https://www.nycourts.gov/courts/2jd/kings/civil/foreclosures/Week9/942-79th-Street.pdf",
      "address": "942 79th Street, Brooklyn, Ny",
      "week": "Week9",
      "auction_date": "2017-07-20T00:00:00.000Z",
      "time": "Thursday afternoons at 2:30 p.m.",
      "room": "Room 224 "
    },
    {
      "PDFlink": "https://www.nycourts.gov/courts/2jd/kings/civil/foreclosures/Week9/996-Halsey-Street.pdf",
      "address": "996 Halsey Street, Brooklyn, Ny",
      "week": "Week9",
      "auction_date": "2017-07-20T00:00:00.000Z",
      "time": "Thursday afternoons at 2:30 p.m.",
      "room": "Room 224 "
    },
    {
      "PDFlink": "https://www.nycourts.gov/courts/2jd/kings/civil//courts/2jd/kings/Civil/KingsPhoneDirectory.pdf",
      "address": "2jd, Brooklyn, Ny",
      "week": "courts",
      "auction_date": "2017-07-20T00:00:00.000Z",
      "time": "Thursday afternoons at 2:30 p.m.",
      "room": "Room 224 "
    }
  ]
}
```

You can view the function specification [here](http://stdlib.com/services/faisalnwz01/scrapeNycProp).


# Notes
Note that this scraper does not support sites that are single page Javascript applications. You should also follow robot.txt rules when you're scraping websites. Use responsibly.

# License
MIT
