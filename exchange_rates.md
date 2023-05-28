---
layout: default
title: Exchange Rates
nav_order: 4
permalink: /exchange_rates
---

# Exchange Rates
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

ezBookkeeping supports updating exchange rates automatically, and supports multiple data sources. You can choose a data source according to your needs. The information on this page may not be the latest, please refer to the reference link or the actual data.

## Available Data Source

### European Central Bank

> Reference: [https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html](https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html)

The base currency is European euro (`EUR`). The daily exchange rates are usually updated around 16:00 CET on every working day.

This data source supports 30 currencies, and all currencies are as follows:

| Currency | Currency Code | Update Frequency |
| --- | --- | --- |
| Australian dollar | AUD | Daily |
| Bulgarian lev | BGN | Daily |
| Brazilian real | BRL | Daily |
| Canadian dollar | CAD | Daily |
| Swiss franc | CHF | Daily |
| Chinese yuan | CNY | Daily |
| Czech koruna | CZK | Daily |
| Danish krone | DKK | Daily |
| Pound sterling | GBP | Daily |
| Hong Kong dollar | HKD | Daily |
| Hungarian forint | HUF | Daily |
| Indonesian rupiah | IDR | Daily |
| Israeli new shekel | ILS | Daily |
| Indian rupee | INR | Daily |
| Icelandic króna | ISK | Daily |
| Japanese yen | JPY | Daily |
| South Korean won | KRW | Daily |
| Mexican peso | MXN | Daily |
| Malaysian ringgit | MYR | Daily |
| Norwegian krone | NOK | Daily |
| New Zealand dollar | NZD | Daily |
| Philippine peso | PHP | Daily |
| Polish złoty | PLN | Daily |
| Romanian leu | RON | Daily |
| Swedish krona/kronor | SEK | Daily |
| Singapore dollar | SGD | Daily |
| Thai baht | THB | Daily |
| Turkish lira | TRY | Daily |
| United States dollar | USD | Daily |
| South African rand | ZAR | Daily |

Configuration option `data_source` value is `euro_central_bank`

### Bank of Canada

> Reference: [https://www.bankofcanada.ca/rates/exchange/daily-exchange-rates/](https://www.bankofcanada.ca/rates/exchange/daily-exchange-rates/)

The base currency is Canadian dollar (`CAD`). The daily exchange rates are usually updated by 16:30 ET on every working day.

This data source supports 26 currencies, and all currencies are as follows:

| Currency | Currency Code | Update Frequency |
| --- | --- | --- |
| Australian dollar | AUD | Daily |
| Brazilian real | BRL | Daily |
| Swiss franc | CHF | Daily |
| Chinese yuan | CNY | Daily |
| Euro | EUR | Daily |
| Pound sterling | GBP | Daily |
| Hong Kong dollar | HKD | Daily |
| Indonesian rupiah | IDR | Daily |
| Indian rupee | INR | Daily |
| Japanese yen | JPY | Daily |
| South Korean won | KRW | Daily |
| Mexican peso | MXN | Daily |
| Malaysian ringgit | MYR | Not Daily |
| Norwegian krone | NOK | Daily |
| New Zealand dollar | NZD | Daily |
| Peruvian sol | PEN | Daily |
| Russian ruble | RUB | Daily |
| Saudi riyal | SAR | Daily |
| Swedish krona/kronor | SEK | Daily |
| Singapore dollar | SGD | Daily |
| Thai baht | THB | Not Daily |
| Turkish lira | TRY | Daily |
| New Taiwan dollar | TWD | Daily |
| United States dollar | USD | Daily |
| Vietnamese đồng | VND | Not Daily |
| South African rand | ZAR | Daily |

Configuration option `data_source` value is `bank_of_canada`

### The Reserve Bank of Australia

> Reference: [https://www.rba.gov.au/statistics/frequency/exchange-rates.html](https://www.rba.gov.au/statistics/frequency/exchange-rates.html)

The base currency is Australian dollar (`AUD`). The daily exchange rates are usually updated around 16:00 AEST on every working day.

This data source supports 18 currencies, and all currencies are as follows:

| Currency | Currency Code | Update Frequency |
| --- | --- | --- |
| Canadian dollar | CAD | Daily |
| Swiss franc | CHF | Daily |
| Chinese yuan | CNY | Daily |
| Euro | EUR | Daily |
| Pound sterling | GBP | Daily |
| Hong Kong dollar | HKD | Daily |
| Indonesian rupiah | IDR | Daily |
| Indian rupee | INR | Daily |
| Japanese yen | JPY | Daily |
| South Korean won | KRW | Daily |
| Malaysian ringgit | MYR | Daily |
| New Zealand dollar | NZD | Daily |
| Philippine Peso | PHP | Daily |
| Singapore dollar | SGD | Daily |
| Thai baht | THB | Daily |
| New Taiwan dollar | TWD | Daily |
| United States dollar | USD | Daily |
| Vietnamese đồng | VND | Daily |

Configuration option `data_source` value is `reserve_bank_of_australia`

### Czech National Bank

> Reference: [https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/](https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/)

The base currency is Czech koruna (`CZK`). The daily exchange rates are usually updated after 14:30 CET on every working day. The monthly exchange rates are usually updated on the last working day of the month.

This data source supports 154 currencies, and all currencies are as follows:

| Currency | Currency Code | Update Frequency |
| --- | --- | --- |
| United Arab Emirates dirham | AED | Monthly |
| Afghan afghani | AFN | Monthly |
| Albanian lek | ALL | Monthly |
| Armenian dram | AMD | Monthly |
| Netherlands Antillean guilder | ANG | Monthly |
| Angolan kwanza | AOA | Monthly |
| Argentine peso | ARS | Monthly |
| Australian dollar | AUD | Daily |
| Aruban florin | AWG | Monthly |
| Azerbaijani manat | AZN | Monthly |
| Bosnia and Herzegovina convertible mark | BAM | Monthly |
| Barbados dollar | BBD | Monthly |
| Bangladeshi taka | BDT | Monthly |
| Bulgarian lev | BGN | Daily |
| Bahraini dinar | BHD | Monthly |
| Burundian franc | BIF | Monthly |
| Bermudian dollar | BMD | Monthly |
| Brunei dollar | BND | Monthly |
| Boliviano | BOB | Monthly |
| Brazilian real | BRL | Daily |
| Bahamian dollar | BSD | Monthly |
| Bhutanese ngultrum | BTN | Monthly |
| Botswana pula | BWP | Monthly |
| Belarusian ruble | BYN | Monthly |
| Belize dollar | BZD | Monthly |
| Canadian dollar | CAD | Daily |
| Congolese franc | CDF | Monthly |
| Swiss franc | CHF | Daily |
| Chilean peso | CLP | Monthly |
| Chinese yuan | CNY | Daily |
| Colombian peso | COP | Monthly |
| Costa Rican colon | CRC | Monthly |
| Cuban peso | CUP | Monthly |
| Cape Verdean escudo | CVE | Monthly |
| Djiboutian franc | DJF | Monthly |
| Danish krone | DKK | Daily |
| Dominican peso | DOP | Monthly |
| Algerian dinar | DZD | Monthly |
| Egyptian pound | EGP | Monthly |
| Eritrean nakfa | ERN | Monthly |
| Ethiopian birr | ETB | Monthly |
| Euro | EUR | Daily |
| Fiji dollar | FJD | Monthly |
| Falkland Islands pound | FKP | Monthly |
| Pound sterling | GBP | Daily |
| Georgian lari | GEL | Monthly |
| Ghanaian cedi | GHS | Monthly |
| Gibraltar pound | GIP | Monthly |
| Gambian dalasi | GMD | Monthly |
| Guinean franc | GNF | Monthly |
| Guatemalan quetzal | GTQ | Monthly |
| Guyanese dollar | GYD | Monthly |
| Hong Kong dollar | HKD | Daily |
| Honduran lempira | HNL | Monthly |
| Haitian gourde | HTG | Monthly |
| Hungarian forint | HUF | Daily |
| Indonesian rupiah | IDR | Daily |
| Israeli new shekel | ILS | Daily |
| Indian rupee | INR | Daily |
| Iraqi dinar | IQD | Monthly |
| Iranian rial | IRR | Monthly |
| Icelandic króna | ISK | Daily |
| Jamaican dollar | JMD | Monthly |
| Jordanian dinar | JOD | Monthly |
| Japanese yen | JPY | Daily |
| Kenyan shilling | KES | Monthly |
| Kyrgyzstani som | KGS | Monthly |
| Cambodian riel | KHR | Monthly |
| Comoro franc | KMF | Monthly |
| North Korean won | KPW | Monthly |
| South Korean won | KRW | Daily |
| Kuwaiti dinar | KWD | Monthly |
| Cayman Islands dollar | KYD | Monthly |
| Kazakhstani tenge | KZT | Monthly |
| Lao kip | LAK | Monthly |
| Lebanese pound | LBP | Monthly |
| Sri Lankan rupee | LKR | Monthly |
| Liberian dollar | LRD | Monthly |
| Lesotho loti | LSL | Monthly |
| Libyan dinar | LYD | Monthly |
| Moroccan dirham | MAD | Monthly |
| Moldovan leu | MDL | Monthly |
| Malagasy ariary | MGA | Monthly |
| Macedonian denar | MKD | Monthly |
| Myanmar kyat | MMK | Monthly |
| Mongolian tögrög | MNT | Monthly |
| Macanese pataca | MOP | Monthly |
| Mauritanian ouguiya | MRU | Monthly |
| Mauritian rupee | MUR | Monthly |
| Maldivian rufiyaa | MVR | Monthly |
| Malawian kwacha | MWK | Monthly |
| Mexican peso | MXN | Daily |
| Malaysian ringgit | MYR | Daily |
| Mozambican metical | MZN | Monthly |
| Namibian dollar | NAD | Monthly |
| Nigerian naira | NGN | Monthly |
| Nicaraguan córdoba | NIO | Monthly |
| Norwegian krone | NOK | Daily |
| Nepalese rupee | NPR | Monthly |
| New Zealand dollar | NZD | Daily |
| Omani rial | OMR | Monthly |
| Panamanian balboa | PAB | Monthly |
| Peruvian sol | PEN | Monthly |
| Papua New Guinean kina | PGK | Monthly |
| Philippine peso | PHP | Daily |
| Pakistani rupee | PKR | Monthly |
| Polish złoty | PLN | Daily |
| Paraguayan guaraní | PYG | Monthly |
| Qatari riyal | QAR | Monthly |
| Romanian leu | RON | Daily |
| Serbian dinar | RSD | Monthly |
| Russian ruble | RUB | Daily |
| Rwandan franc | RWF | Monthly |
| Saudi riyal | SAR | Monthly |
| Solomon Islands dollar | SBD | Monthly |
| Seychelles rupee | SCR | Monthly |
| Sudanese pound | SDG | Monthly |
| Swedish krona/kronor | SEK | Daily |
| Singapore dollar | SGD | Daily |
| Saint Helena pound | SHP | Monthly |
| Sierra Leonean leone | SLE | Monthly |
| Somali shilling | SOS | Monthly |
| Surinamese dollar | SRD | Monthly |
| South Sudanese pound | SSP | Monthly |
| São Tomé and Príncipe dobra | STN | Monthly |
| Salvadoran colón | SVC | Monthly |
| Syrian pound | SYP | Monthly |
| Swazi lilangeni | SZL | Monthly |
| Thai baht | THB | Daily |
| Tajikistani somoni | TJS | Monthly |
| Turkmenistan manat | TMT | Monthly |
| Tunisian dinar | TND | Monthly |
| Tongan paʻanga | TOP | Monthly |
| Turkish lira | TRY | Daily |
| Trinidad and Tobago dollar | TTD | Monthly |
| New Taiwan dollar | TWD | Monthly |
| Tanzanian shilling | TZS | Monthly |
| Ukrainian hryvnia | UAH | Monthly |
| Ugandan shilling | UGX | Monthly |
| United States dollar | USD | Daily |
| Uruguayan peso | UYU | Monthly |
| Uzbekistan som | UZS | Monthly |
| Venezuelan Bolívar Fuerte | VEF | Monthly |
| Vietnamese đồng | VND | Monthly |
| Vanuatu vatu | VUV | Monthly |
| Samoan tala | WST | Monthly |
| CFA franc BEAC | XAF | Monthly |
| East Caribbean dollar | XCD | Monthly |
| CFA franc BCEAO | XOF | Monthly |
| CFP franc | XPF | Monthly |
| Yemeni rial | YER | Monthly |
| South African rand | ZAR | Daily |
| Zambian kwacha | ZMW | Monthly |
| Zimbabwean dollar | ZWL | Monthly |

Configuration option `data_source` value is `czech_national_bank`

### National Bank of Poland

> Reference: [https://www.nbp.pl/homen.aspx?f=/kursy/kursyen.htm](https://www.nbp.pl/homen.aspx?f=/kursy/kursyen.htm)

The base currency is Polish złoty (`PLN`). The daily exchange rates are usually updated between 11:45 CET and 12:15 CET on every working day. The weekly exchange rates are usually updated on Wednesdays.

This data source supports 148 currencies, and all currencies are as follows:

| Currency | Currency Code | Update Frequency |
| --- | --- | --- |
| United Arab Emirates dirham | AED | Weekly |
| Afghan afghani | AFN | Weekly |
| Albanian lek | ALL | Weekly |
| Armenian dram | AMD | Weekly |
| Netherlands Antillean guilder | ANG | Weekly |
| Angolan kwanza | AOA | Weekly |
| Argentine peso | ARS | Weekly |
| Australian dollar | AUD | Daily |
| Aruban florin | AWG | Weekly |
| Azerbaijani manat | AZN | Weekly |
| Bosnia and Herzegovina convertible mark | BAM | Weekly |
| Barbados dollar | BBD | Weekly |
| Bangladeshi taka | BDT | Weekly |
| Bulgarian lev | BGN | Daily |
| Bahraini dinar | BHD | Weekly |
| Burundian franc | BIF | Weekly |
| Brunei dollar | BND | Weekly |
| Boliviano | BOB | Weekly |
| Brazilian real | BRL | Daily |
| Bahamian dollar | BSD | Weekly |
| Botswana pula | BWP | Weekly |
| Belarusian ruble | BYN | Weekly |
| Belize dollar | BZD | Weekly |
| Canadian dollar | CAD | Daily |
| Congolese franc | CDF | Weekly |
| Swiss franc | CHF | Daily |
| Chilean peso | CLP | Daily |
| Chinese yuan | CNY | Daily |
| Colombian peso | COP | Weekly |
| Costa Rican colon | CRC | Weekly |
| Cuban peso | CUP | Weekly |
| Cape Verdean escudo | CVE | Weekly |
| Czech koruna | CZK | Daily |
| Djiboutian franc | DJF | Weekly |
| Danish krone | DKK | Daily |
| Dominican peso | DOP | Weekly |
| Algerian dinar | DZD | Weekly |
| Egyptian pound | EGP | Weekly |
| Eritrean nakfa | ERN | Weekly |
| Ethiopian birr | ETB | Weekly |
| Euro | EUR | Daily |
| Fiji dollar | FJD | Weekly |
| Pound sterling | GBP | Daily |
| Georgian lari | GEL | Weekly |
| Ghanaian cedi | GHS | Weekly |
| Gibraltar pound | GIP | Weekly |
| Gambian dalasi | GMD | Weekly |
| Guinean franc | GNF | Weekly |
| Guatemalan quetzal | GTQ | Weekly |
| Guyanese dollar | GYD | Weekly |
| Hong Kong dollar | HKD | Daily |
| Honduran lempira | HNL | Weekly |
| Haitian gourde | HTG | Weekly |
| Hungarian forint | HUF | Daily |
| Indonesian rupiah | IDR | Daily |
| Israeli new shekel | ILS | Daily |
| Indian rupee | INR | Daily |
| Iraqi dinar | IQD | Weekly |
| Iranian rial | IRR | Weekly |
| Icelandic króna | ISK | Daily |
| Jamaican dollar | JMD | Weekly |
| Jordanian dinar | JOD | Weekly |
| Japanese yen | JPY | Daily |
| Kenyan shilling | KES | Weekly |
| Kyrgyzstani som | KGS | Weekly |
| Cambodian riel | KHR | Weekly |
| Comoro franc | KMF | Weekly |
| South Korean won | KRW | Daily |
| Kuwaiti dinar | KWD | Weekly |
| Kazakhstani tenge | KZT | Weekly |
| Lao kip | LAK | Weekly |
| Lebanese pound | LBP | Weekly |
| Sri Lankan rupee | LKR | Weekly |
| Liberian dollar | LRD | Weekly |
| Lesotho loti | LSL | Weekly |
| Libyan dinar | LYD | Weekly |
| Moroccan dirham | MAD | Weekly |
| Moldovan leu | MDL | Weekly |
| Malagasy ariary | MGA | Weekly |
| Macedonian denar | MKD | Weekly |
| Myanmar kyat | MMK | Weekly |
| Mongolian tögrög | MNT | Weekly |
| Macanese pataca | MOP | Weekly |
| Mauritanian ouguiya | MRU | Weekly |
| Mauritian rupee | MUR | Weekly |
| Maldivian rufiyaa | MVR | Weekly |
| Malawian kwacha | MWK | Weekly |
| Mexican peso | MXN | Daily |
| Malaysian ringgit | MYR | Daily |
| Mozambican metical | MZN | Weekly |
| Namibian dollar | NAD | Weekly |
| Nigerian naira | NGN | Weekly |
| Nicaraguan córdoba | NIO | Weekly |
| Norwegian krone | NOK | Daily |
| Nepalese rupee | NPR | Weekly |
| New Zealand dollar | NZD | Daily |
| Omani rial | OMR | Weekly |
| Panamanian balboa | PAB | Weekly |
| Peruvian sol | PEN | Weekly |
| Papua New Guinean kina | PGK | Weekly |
| Philippine peso | PHP | Daily |
| Pakistani rupee | PKR | Weekly |
| Paraguayan guaraní | PYG | Weekly |
| Qatari riyal | QAR | Weekly |
| Romanian leu | RON | Daily |
| Serbian dinar | RSD | Weekly |
| Russian ruble | RUB | Daily |
| Rwandan franc | RWF | Weekly |
| Saudi riyal | SAR | Weekly |
| Solomon Islands dollar | SBD | Weekly |
| Seychelles rupee | SCR | Weekly |
| Sudanese pound | SDG | Weekly |
| Swedish krona/kronor | SEK | Daily |
| Singapore dollar | SGD | Daily |
| Sierra Leonean leone | SLE | Weekly |
| Somali shilling | SOS | Weekly |
| Surinamese dollar | SRD | Weekly |
| South Sudanese pound | SSP | Weekly |
| São Tomé and Príncipe dobra | STN | Weekly |
| Salvadoran colón | SVC | Weekly |
| Syrian pound | SYP | Weekly |
| Swazi lilangeni | SZL | Weekly |
| Thai baht | THB | Daily |
| Tajikistani somoni | TJS | Weekly |
| Turkmenistan manat | TMT | Weekly |
| Tunisian dinar | TND | Weekly |
| Tongan paʻanga | TOP | Weekly |
| Turkish lira | TRY | Daily |
| Trinidad and Tobago dollar | TTD | Weekly |
| New Taiwan dollar | TWD | Weekly |
| Tanzanian shilling | TZS | Weekly |
| Ukrainian hryvnia | UAH | Daily |
| Ugandan shilling | UGX | Weekly |
| United States dollar | USD | Daily |
| Uruguayan peso | UYU | Weekly |
| Uzbekistan som | UZS | Weekly |
| Venezuelan bolívar soberano | VES | Weekly |
| Vietnamese đồng | VND | Weekly |
| Vanuatu vatu | VUV | Weekly |
| Samoan tala | WST | Weekly |
| CFA franc BEAC | XAF | Weekly |
| East Caribbean dollar | XCD | Weekly |
| CFA franc BCEAO | XOF | Weekly |
| CFP franc | XPF | Weekly |
| Yemeni rial | YER | Weekly |
| South African rand | ZAR | Daily |
| Zambian kwacha | ZMW | Weekly |
| Zimbabwean dollar | ZWL | Weekly |

Configuration option `data_source` value is `national_bank_of_poland`

### Monetary Authority of Singapore

> Reference: [https://eservices.mas.gov.sg/Statistics/msb/ExchangeRates.aspx](https://eservices.mas.gov.sg/Statistics/msb/ExchangeRates.aspx)

The base currency is Singapore dollar (`SGD`). The daily exchange rates are usually updated around midday (SGT) on every working day.

This data source supports 21 currencies, and all currencies are as follows:

| Currency | Currency Code | Update Frequency |
| --- | --- | --- |
| United Arab Emirates dirham | AED | Daily |
| Australian dollar | AUD | Daily |
| Canadian dollar | CAD | Daily |
| Swiss franc | CHF | Daily |
| Chinese yuan | CNY | Daily |
| Euro | EUR | Daily |
| Pound sterling | GBP | Daily |
| Hong Kong dollar | HKD | Daily |
| Indonesian rupiah | IDR | Daily |
| Indian rupee | INR | Daily |
| Japanese yen | JPY | Daily |
| South Korean won | KRW | Daily |
| Malaysian ringgit | MYR | Daily |
| New Zealand dollar | NZD | Daily |
| Philippine peso | PHP | Daily |
| Qatari riyal | QAR | Daily |
| Saudi riyal | SAR | Daily |
| Thai baht | THB | Daily |
| New Taiwan dollar | TWD | Daily |
| United States dollar | USD | Daily |
| Vietnamese đồng | VND | Daily |

Configuration option `data_source` value is `monetary_authority_of_singapore`