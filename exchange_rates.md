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

### The Reserve Bank of Australia

> Reference: [https://www.rba.gov.au/statistics/frequency/exchange-rates.html](https://www.rba.gov.au/statistics/frequency/exchange-rates.html)

The base currency is Australian dollar (`AUD`). The daily exchange rates are usually updated around 16:00 AEST (Australian Eastern Standard Time) on every working day.

This data source supports 18 currencies, and all currencies are as follows:

| Currency | Currency Code | Update Frequency |
| --- | --- | --- |
| Canadian Dollar | CAD | Daily |
| Swiss Franc | CHF | Daily |
| Chinese Yuan | CNY | Daily |
| Euro | EUR | Daily |
| British Pound | GBP | Daily |
| Hong Kong Dollar | HKD | Daily |
| Indonesian Rupiah | IDR | Daily |
| Indian Rupee | INR | Daily |
| Japanese Yen | JPY | Daily |
| South Korean Won | KRW | Daily |
| Malaysian Ringgit | MYR | Daily |
| New Zealand Dollar | NZD | Daily |
| Philippine Peso | PHP | Daily |
| Singapore Dollar | SGD | Daily |
| Thai Baht | THB | Daily |
| New Taiwan Dollar | TWD | Daily |
| United States Dollar | USD | Daily |
| Vietnamese Dong | VND | Daily |

Configuration option `data_source` value is `reserve_bank_of_australia`

### Bank of Canada

> Reference: [https://www.bankofcanada.ca/rates/exchange/daily-exchange-rates/](https://www.bankofcanada.ca/rates/exchange/daily-exchange-rates/)

The base currency is Canadian dollar (`CAD`). The daily exchange rates are usually updated by 16:30 ET (Eastern Time) on every working day.

This data source supports 26 currencies, and all currencies are as follows:

| Currency | Currency Code | Update Frequency |
| --- | --- | --- |
| Australian Dollar | AUD | Daily |
| Brazilian Real | BRL | Daily |
| Swiss Franc | CHF | Daily |
| Chinese Yuan | CNY | Daily |
| Euro | EUR | Daily |
| British Pound | GBP | Daily |
| Hong Kong Dollar | HKD | Daily |
| Indonesian Rupiah | IDR | Daily |
| Indian Rupee | INR | Daily |
| Japanese Yen | JPY | Daily |
| South Korean Won | KRW | Daily |
| Mexican Peso | MXN | Daily |
| Malaysian Ringgit | MYR | Not Daily |
| Norwegian Krone | NOK | Daily |
| New Zealand Dollar | NZD | Daily |
| Peruvian Sol | PEN | Daily |
| Russian Ruble | RUB | Daily |
| Saudi Riyal | SAR | Daily |
| Swedish Krona | SEK | Daily |
| Singapore Dollar | SGD | Daily |
| Thai Baht | THB | Not Daily |
| Turkish Lira | TRY | Daily |
| New Taiwan Dollar | TWD | Daily |
| United States Dollar | USD | Daily |
| Vietnamese Dong | VND | Not Daily |
| South African Rand | ZAR | Daily |

Configuration option `data_source` value is `bank_of_canada`

### Czech National Bank

> Reference: [https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/](https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/)

The base currency is Czech koruna (`CZK`). The daily exchange rates are usually updated after 14:30 CET (Central European Time) on every working day. The monthly exchange rates are usually updated on the last working day of the month.

This data source supports 152 currencies, and all currencies are as follows:

| Currency | Currency Code | Update Frequency |
| --- | --- | --- |
| United Arab Emirates Dirham | AED | Monthly |
| Afghan Afghani | AFN | Monthly |
| Albanian Lek | ALL | Monthly |
| Armenian Dram | AMD | Monthly |
| Netherlands Antillean Guilder | ANG | Monthly |
| Angolan Kwanza | AOA | Monthly |
| Argentine Peso | ARS | Monthly |
| Australian Dollar | AUD | Daily |
| Aruban Florin | AWG | Monthly |
| Azerbaijan Manat | AZN | Monthly |
| Bosnia and Herzegovina Convertible Mark | BAM | Monthly |
| Barbadian Dollar | BBD | Monthly |
| Bangladeshi Taka | BDT | Monthly |
| Bulgarian Lev | BGN | Daily |
| Bahraini Dinar | BHD | Monthly |
| Burundian Franc | BIF | Monthly |
| Bermudian Dollar | BMD | Monthly |
| Brunei Dollar | BND | Monthly |
| Bolivian Boliviano | BOB | Monthly |
| Brazilian Real | BRL | Daily |
| Bahamian Dollar | BSD | Monthly |
| Bhutanese Ngultrum | BTN | Monthly |
| Botswana Pula | BWP | Monthly |
| Belarusian Ruble | BYN | Monthly |
| Belize Dollar | BZD | Monthly |
| Canadian Dollar | CAD | Daily |
| Congolese Franc | CDF | Monthly |
| Swiss Franc | CHF | Daily |
| Chilean Peso | CLP | Monthly |
| Chinese Yuan | CNY | Daily |
| Colombian Peso | COP | Monthly |
| Costa Rican Colon | CRC | Monthly |
| Cuban Peso | CUP | Monthly |
| Cape Verdean Escudo | CVE | Monthly |
| Djiboutian Franc | DJF | Monthly |
| Danish Krone | DKK | Daily |
| Dominican Peso | DOP | Monthly |
| Algerian Dinar | DZD | Monthly |
| Egyptian Pound | EGP | Monthly |
| Eritrean Nakfa | ERN | Monthly |
| Ethiopian Birr | ETB | Monthly |
| Euro | EUR | Daily |
| Fijian Dollar | FJD | Monthly |
| Falkland Islands Pound | FKP | Monthly |
| British Pound | GBP | Daily |
| Georgian Lari | GEL | Monthly |
| Ghanaian Cedi | GHS | Monthly |
| Gibraltar Pound | GIP | Monthly |
| Gambian Dalasi | GMD | Monthly |
| Guinean Franc | GNF | Monthly |
| Guatemalan Quetzal | GTQ | Monthly |
| Guyanese Dollar | GYD | Monthly |
| Hong Kong Dollar | HKD | Daily |
| Honduran Lempira | HNL | Monthly |
| Haitian Gourde | HTG | Monthly |
| Hungarian Forint | HUF | Daily |
| Indonesian Rupiah | IDR | Daily |
| Israeli New Shekel | ILS | Daily |
| Indian Rupee | INR | Daily |
| Iraqi Dinar | IQD | Monthly |
| Iranian Rial | IRR | Monthly |
| Icelandic Krona | ISK | Daily |
| Jamaican Dollar | JMD | Monthly |
| Jordanian Dinar | JOD | Monthly |
| Japanese Yen | JPY | Daily |
| Kenyan Shilling | KES | Monthly |
| Kyrgyzstani Som | KGS | Monthly |
| Cambodian Riel | KHR | Monthly |
| Comorian Franc | KMF | Monthly |
| North Korean Won | KPW | Monthly |
| South Korean Won | KRW | Daily |
| Kuwaiti Dinar | KWD | Monthly |
| Cayman Islands Dollar | KYD | Monthly |
| Kazakhstani Tenge | KZT | Monthly |
| Lao Kip | LAK | Monthly |
| Lebanese Pound | LBP | Monthly |
| Sri Lankan Rupee | LKR | Monthly |
| Liberian Dollar | LRD | Monthly |
| Lesotho Loti | LSL | Monthly |
| Libyan Dinar | LYD | Monthly |
| Moroccan Dirham | MAD | Monthly |
| Moldovan Leu | MDL | Monthly |
| Malagasy Ariary | MGA | Monthly |
| Macedonian Denar | MKD | Monthly |
| Myanmar Kyat | MMK | Monthly |
| Mongolian Tugrik | MNT | Monthly |
| Macanese Pataca | MOP | Monthly |
| Mauritanian Ouguiya | MRU | Monthly |
| Mauritian Rupee | MUR | Monthly |
| Maldivian Rufiyaa | MVR | Monthly |
| Malawian Kwacha | MWK | Monthly |
| Mexican Peso | MXN | Daily |
| Malaysian Ringgit | MYR | Daily |
| Mozambican Metical | MZN | Monthly |
| Namibian Dollar | NAD | Monthly |
| Nigerian Naira | NGN | Monthly |
| Nicaraguan Cordoba | NIO | Monthly |
| Norwegian Krone | NOK | Daily |
| Nepalese Rupee | NPR | Monthly |
| New Zealand Dollar | NZD | Daily |
| Omani Rial | OMR | Monthly |
| Panamanian Balboa | PAB | Monthly |
| Peruvian Sol | PEN | Monthly |
| Papua New Guinean Kina | PGK | Monthly |
| Philippine Peso | PHP | Daily |
| Pakistani Rupee | PKR | Monthly |
| Polish Zloty | PLN | Daily |
| Paraguayan Guarani | PYG | Monthly |
| Qatari Riyal | QAR | Monthly |
| Romanian Leu | RON | Daily |
| Serbian Dinar | RSD | Monthly |
| Russian Ruble | RUB | Daily |
| Rwandan Franc | RWF | Monthly |
| Saudi Riyal | SAR | Monthly |
| Solomon Islands Dollar | SBD | Monthly |
| Seychelles Rupee | SCR | Monthly |
| Sudanese Pound | SDG | Monthly |
| Swedish Krona | SEK | Daily |
| Singapore Dollar | SGD | Daily |
| Saint Helena Pound | SHP | Monthly |
| Sierra Leonean Leone | SLE | Monthly |
| Somali Shilling | SOS | Monthly |
| Surinamese Dollar | SRD | Monthly |
| South Sudanese Pound | SSP | Monthly |
| Sao Tome Principe Dobra | STN | Monthly |
| Salvadoran Colon | SVC | Monthly |
| Syrian Pound | SYP | Monthly |
| Swazi Lilangeni | SZL | Monthly |
| Thai Baht | THB | Daily |
| Tajikistani Somoni | TJS | Monthly |
| Turkmenistani Manat | TMT | Monthly |
| Tunisian Dinar | TND | Monthly |
| Tongan Pa'anga | TOP | Monthly |
| Turkish Lira | TRY | Daily |
| Trinidad and Tobago Dollar | TTD | Monthly |
| New Taiwan Dollar | TWD | Monthly |
| Tanzanian Shilling | TZS | Monthly |
| Ukrainian Hryvnia | UAH | Monthly |
| Ugandan Shilling | UGX | Monthly |
| United States Dollar | USD | Daily |
| Uruguayan Peso | UYU | Monthly |
| Uzbekistani Sum | UZS | Monthly |
| Vietnamese Dong | VND | Monthly |
| Vanuatu Vatu | VUV | Monthly |
| Samoan Tala | WST | Monthly |
| Central African CFA Franc | XAF | Monthly |
| East Caribbean Dollar | XCD | Monthly |
| West African CFA Franc | XOF | Monthly |
| CFP Franc | XPF | Monthly |
| Yemeni Rial | YER | Monthly |
| South African Rand | ZAR | Daily |
| Zambian Kwacha | ZMW | Monthly |

Configuration option `data_source` value is `czech_national_bank`

### Danmarks Nationalbank

> Reference: [https://www.nationalbanken.dk/en/what-we-do/stable-prices-monetary-policy-and-the-danish-economy/exchange-rates](https://www.nationalbanken.dk/en/what-we-do/stable-prices-monetary-policy-and-the-danish-economy/exchange-rates)

The base currency is Danish krone (`DKK`). The daily exchange rates are usually updated shortly after 16:00 CET (Central European Time) on every working day.

This data source supports 30 currencies, and all currencies are as follows:

| Currency | Currency Code | Update Frequency |
| --- | --- | --- |
| Australian Dollar | AUD | Daily |
| Bulgarian Lev | BGN | Daily |
| Brazilian Real | BRL | Daily |
| Canadian Dollar | CAD | Daily |
| Swiss Franc | CHF | Daily |
| Chinese Yuan | CNY | Daily |
| Czech Koruna | CZK | Daily |
| Euro | EUR | Daily |
| British Pound | GBP | Daily |
| Hong Kong Dollar | HKD | Daily |
| Hungarian Forint | HUF | Daily |
| Indonesian Rupiah | IDR | Daily |
| Israeli New Shekel | ILS | Daily |
| Indian Rupee | INR | Daily |
| Icelandic Krona | ISK | Daily |
| Japanese Yen | JPY | Daily |
| South Korean Won | KRW | Daily |
| Mexican Peso | MXN | Daily |
| Malaysian Ringgit | MYR | Daily |
| Norwegian Krone | NOK | Daily |
| New Zealand Dollar | NZD | Daily |
| Philippine Peso | PHP | Daily |
| Polish Zloty | PLN | Daily |
| Romanian Leu | RON | Daily |
| Swedish Krona | SEK | Daily |
| Singapore Dollar | SGD | Daily |
| Thai Baht | THB | Daily |
| Turkish Lira | TRY | Daily |
| United States Dollar | USD | Daily |
| South African Rand | ZAR | Daily |

Configuration option `data_source` value is `danmarks_national_bank`

### European Central Bank

> Reference: [https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html](https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html)

The base currency is European euro (`EUR`). The daily exchange rates are usually updated around 16:00 CET (Central European Time) on every working day.

This data source supports 30 currencies, and all currencies are as follows:

| Currency | Currency Code | Update Frequency |
| --- | --- | --- |
| Australian Dollar | AUD | Daily |
| Bulgarian Lev | BGN | Daily |
| Brazilian Real | BRL | Daily |
| Canadian Dollar | CAD | Daily |
| Swiss Franc | CHF | Daily |
| Chinese Yuan | CNY | Daily |
| Czech Koruna | CZK | Daily |
| Danish Krone | DKK | Daily |
| British Pound | GBP | Daily |
| Hong Kong Dollar | HKD | Daily |
| Hungarian Forint | HUF | Daily |
| Indonesian Rupiah | IDR | Daily |
| Israeli New Shekel | ILS | Daily |
| Indian Rupee | INR | Daily |
| Icelandic Krona | ISK | Daily |
| Japanese Yen | JPY | Daily |
| South Korean Won | KRW | Daily |
| Mexican Peso | MXN | Daily |
| Malaysian Ringgit | MYR | Daily |
| Norwegian Krone | NOK | Daily |
| New Zealand Dollar | NZD | Daily |
| Philippine Peso | PHP | Daily |
| Polish Zloty | PLN | Daily |
| Romanian Leu | RON | Daily |
| Swedish Krona | SEK | Daily |
| Singapore Dollar | SGD | Daily |
| Thai Baht | THB | Daily |
| Turkish Lira | TRY | Daily |
| United States Dollar | USD | Daily |
| South African Rand | ZAR | Daily |

Configuration option `data_source` value is `euro_central_bank`

### National Bank of Georgia

> Reference: [https://nbg.gov.ge/en/monetary-policy/currency](https://nbg.gov.ge/en/monetary-policy/currency)

The base currency is Georgian lari (`GEL`). The daily exchange rates are usually updated no later than 17:00 GET (Georgia Standard Time) on every working day.

This data source supports 43 currencies, and all currencies are as follows:

| Currency | Currency Code | Update Frequency |
| --- | --- | --- |
| United Arab Emirates Dirham | AED | Daily |
| Armenian Dram | AMD | Daily |
| Australian Dollar | AUD | Daily |
| Azerbaijan Manat | AZN | Daily |
| Bulgarian Lev | BGN | Daily |
| Brazilian Real | BRL | Daily |
| Belarusian Ruble | BYN | Daily |
| Canadian Dollar | CAD | Daily |
| Swiss Franc | CHF | Daily |
| Chinese Yuan | CNY | Daily |
| Czech Koruna | CZK | Daily |
| Danish Krone | DKK | Daily |
| Egyptian Pound | EGP | Daily |
| Euro | EUR | Daily |
| British Pound | GBP | Daily |
| Hong Kong Dollar | HKD | Daily |
| Hungarian Forint | HUF | Daily |
| Israeli New Shekel | ILS | Daily |
| Indian Rupee | INR | Daily |
| Iranian Rial | IRR | Daily |
| Icelandic Krona | ISK | Daily |
| Japanese Yen | JPY | Daily |
| Kyrgyzstani Som | KGS | Daily |
| South Korean Won | KRW | Daily |
| Kuwaiti Dinar | KWD | Daily |
| Kazakhstani Tenge | KZT | Daily |
| Moldovan Leu | MDL | Daily |
| Norwegian Krone | NOK | Daily |
| New Zealand Dollar | NZD | Daily |
| Polish Zloty | PLN | Daily |
| Qatari Riyal | QAR | Daily |
| Romanian Leu | RON | Daily |
| Serbian Dinar | RSD | Daily |
| Russian Ruble | RUB | Daily |
| Swedish Krona | SEK | Daily |
| Singapore Dollar | SGD | Daily |
| Tajikistani Somoni | TJS | Daily |
| Turkmenistani Manat | TMT | Daily |
| Turkish Lira | TRY | Daily |
| Ukrainian Hryvnia | UAH | Daily |
| United States Dollar | USD | Daily |
| Uzbekistani Sum | UZS | Daily |
| South African Rand | ZAR | Daily |

Configuration option `data_source` value is `national_bank_of_georgia`

### Central Bank of Hungary

> Reference: [https://www.mnb.hu/en/arfolyamok](https://www.mnb.hu/en/arfolyamok)

The base currency is Hungarian forint (`HUF`). The daily exchange rates are usually updated around 11:00 CET (Central European Time) on every working day.

This data source supports 33 currencies, and all currencies are as follows:

| Currency | Currency Code | Update Frequency |
| --- | --- | --- |
| Australian Dollar | AUD | Daily |
| Bulgarian Lev | BGN | Daily |
| Brazilian Real | BRL | Daily |
| Canadian Dollar | CAD | Daily |
| Swiss Franc | CHF | Daily |
| Chinese Yuan | CNY | Daily |
| Czech Koruna | CZK | Daily |
| Danish Krone | DKK | Daily |
| Euro | EUR | Daily |
| British Pound | GBP | Daily |
| Hong Kong Dollar | HKD | Daily |
| Indonesian Rupiah | IDR | Daily |
| Israeli New Shekel | ILS | Daily |
| Indian Rupee | INR | Daily |
| Icelandic Krona | ISK | Daily |
| Japanese Yen | JPY | Daily |
| South Korean Won | KRW | Daily |
| Mexican Peso | MXN | Daily |
| Malaysian Ringgit | MYR | Daily |
| Norwegian Krone | NOK | Daily |
| New Zealand Dollar | NZD | Daily |
| Philippine Peso | PHP | Daily |
| Polish Zloty | PLN | Daily |
| Romanian Leu | RON | Daily |
| Serbian Dinar | RSD | Daily |
| Russian Ruble | RUB | Daily |
| Swedish Krona | SEK | Daily |
| Singapore Dollar | SGD | Daily |
| Thai Baht | THB | Daily |
| Turkish Lira | TRY | Daily |
| Ukrainian Hryvnia | UAH | Daily |
| United States Dollar | USD | Daily |
| South African Rand | ZAR | Daily |

Configuration option `data_source` value is `central_bank_of_hungary`

### Bank of Israel

> Reference: [https://www.boi.org.il/en/economic-roles/financial-markets/exchange-rates/](https://www.boi.org.il/en/economic-roles/financial-markets/exchange-rates/)

The base currency is Israeli new shekel (`ILS`). The daily exchange rates are usually updated about 15:45 IST (Israel Standard Time) on every working day.

This data source supports 15 currencies, and all currencies are as follows:

| Currency | Currency Code | Update Frequency |
| --- | --- | --- |
| Australian Dollar | AUD | Daily |
| Canadian Dollar | CAD | Daily |
| Swiss Franc | CHF | Daily |
| Danish Krone | DKK | Daily |
| Egyptian Pound | EGP | Daily |
| Euro | EUR | Daily |
| British Pound | GBP | Daily |
| Jordanian Dinar | JOD | Daily |
| Japanese Yen | JPY | Daily |
| Lebanese Pound | LBP | Daily |
| Norwegian Krone | NOK | Daily |
| Swedish Krona | SEK | Daily |
| United States Dollar | USD | Daily |
| South African Rand | ZAR | Daily |

Configuration option `data_source` value is `bank_of_israel`

### Central Bank of Myanmar

> Reference: [https://forex.cbm.gov.mm/index.php/fxrate](https://forex.cbm.gov.mm/index.php/fxrate)

The base currency is Myanmar kyat (`MMK`).

This data source supports 38 currencies, and all currencies are as follows:

| Currency | Currency Code | Update Frequency |
| --- | --- | --- |
| Australian Dollar | AUD | Daily |
| Bangladeshi Taka | BDT | Daily |
| Brunei Dollar | BND | Daily |
| Brazilian Real | BRL | Daily |
| Canadian Dollar | CAD | Daily |
| Swiss Franc | CHF | Daily |
| Chinese Yuan | CNY | Daily |
| Czech Koruna | CZK | Daily |
| Danish Krone | DKK | Daily |
| Egyptian Pound | EGP | Daily |
| Euro | EUR | Daily |
| British Pound | GBP | Daily |
| Hong Kong Dollar | HKD | Daily |
| Indonesian Rupiah | IDR | Daily |
| Israeli New Shekel | ILS | Daily |
| Indian Rupee | INR | Daily |
| Japanese Yen | JPY | Daily |
| Kenyan Shilling | KES | Daily |
| Cambodian Riel | KHR | Daily |
| South Korean Won | KRW | Daily |
| Kuwaiti Dinar | KWD | Daily |
| Lao Kip | LAK | Daily |
| Sri Lankan Rupee | LKR | Daily |
| Malaysian Ringgit | MYR | Daily |
| Norwegian Krone | NOK | Daily |
| Nepalese Rupee | NPR | Daily |
| New Zealand Dollar | NZD | Daily |
| Philippine Peso | PHP | Daily |
| Pakistani Rupee | PKR | Daily |
| Serbian Dinar | RSD | Daily |
| Russian Ruble | RUB | Daily |
| Saudi Riyal | SAR | Daily |
| Swedish Krona | SEK | Daily |
| Singapore Dollar | SGD | Daily |
| Thai Baht | THB | Daily |
| United States Dollar | USD | Daily |
| Vietnamese Dong | VND | Daily |
| South African Rand | ZAR | Daily |

Configuration option `data_source` value is `central_bank_of_myanmar`

### Norges Bank

> Reference: [https://www.norges-bank.no/en/topics/Statistics/exchange_rates/](https://www.norges-bank.no/en/topics/Statistics/exchange_rates/)

The base currency is Norwegian krone (`NOK`). The daily exchange rates are usually updated approximately 16:00 CET (Central European Time) on every working day.

This data source supports 37 currencies, and all currencies are as follows:

| Currency | Currency Code | Update Frequency |
| --- | --- | --- |
| Australian Dollar | AUD | Daily |
| Bangladeshi Taka | BDT | Daily |
| Bulgarian Lev | BGN | Daily |
| Brazilian Real | BRL | Daily |
| Belarusian Ruble | BYN | Daily |
| Canadian Dollar | CAD | Daily |
| Swiss Franc | CHF | Daily |
| Chinese Yuan | CNY | Daily |
| Czech Koruna | CZK | Daily |
| Danish Krone | DKK | Daily |
| Euro | EUR | Daily |
| British Pound | GBP | Daily |
| Hong Kong Dollar | HKD | Daily |
| Hungarian Forint | HUF | Daily |
| Indonesian Rupiah | IDR | Daily |
| Israeli New Shekel | ILS | Daily |
| Indian Rupee | INR | Daily |
| Icelandic Krona | ISK | Daily |
| Japanese Yen | JPY | Daily |
| South Korean Won | KRW | Daily |
| Myanmar Kyat | MMK | Daily |
| Mexican Peso | MXN | Daily |
| Malaysian Ringgit | MYR | Daily |
| New Zealand Dollar | NZD | Daily |
| Philippine Peso | PHP | Daily |
| Pakistani Rupee | PKR | Daily |
| Polish Zloty | PLN | Daily |
| Romanian Leu | RON | Daily |
| Russian Ruble | RUB | Daily |
| Swedish Krona | SEK | Daily |
| Singapore Dollar | SGD | Daily |
| Thai Baht | THB | Daily |
| Turkish Lira | TRY | Daily |
| New Taiwan Dollar | TWD | Daily |
| United States Dollar | USD | Daily |
| Vietnamese Dong | VND | Daily |
| South African Rand | ZAR | Daily |

Configuration option `data_source` value is `norges_bank`

### National Bank of Poland

> Reference: [https://nbp.pl/en/statistic-and-financial-reporting/rates/](https://nbp.pl/en/statistic-and-financial-reporting/rates/)

The base currency is Polish złoty (`PLN`). The daily exchange rates are usually updated between 11:45 CET (Central European Time) and 12:15 CET on every working day. The weekly exchange rates are usually updated on Wednesdays.

This data source supports 148 currencies, and all currencies are as follows:

| Currency | Currency Code | Update Frequency |
| --- | --- | --- |
| United Arab Emirates Dirham | AED | Weekly |
| Afghan Afghani | AFN | Weekly |
| Albanian Lek | ALL | Weekly |
| Armenian Dram | AMD | Weekly |
| Netherlands Antillean Guilder | ANG | Weekly |
| Angolan Kwanza | AOA | Weekly |
| Argentine Peso | ARS | Weekly |
| Australian Dollar | AUD | Daily |
| Aruban Florin | AWG | Weekly |
| Azerbaijan Manat | AZN | Weekly |
| Bosnia and Herzegovina Convertible Mark | BAM | Weekly |
| Barbadian Dollar | BBD | Weekly |
| Bangladeshi Taka | BDT | Weekly |
| Bulgarian Lev | BGN | Daily |
| Bahraini Dinar | BHD | Weekly |
| Burundian Franc | BIF | Weekly |
| Brunei Dollar | BND | Weekly |
| Bolivian Boliviano | BOB | Weekly |
| Brazilian Real | BRL | Daily |
| Bahamian Dollar | BSD | Weekly |
| Botswana Pula | BWP | Weekly |
| Belarusian Ruble | BYN | Weekly |
| Belize Dollar | BZD | Weekly |
| Canadian Dollar | CAD | Daily |
| Congolese Franc | CDF | Weekly |
| Swiss Franc | CHF | Daily |
| Chilean Peso | CLP | Daily |
| Chinese Yuan | CNY | Daily |
| Colombian Peso | COP | Weekly |
| Costa Rican Colon | CRC | Weekly |
| Cuban Peso | CUP | Weekly |
| Cape Verdean Escudo | CVE | Weekly |
| Czech Koruna | CZK | Daily |
| Djiboutian Franc | DJF | Weekly |
| Danish Krone | DKK | Daily |
| Dominican Peso | DOP | Weekly |
| Algerian Dinar | DZD | Weekly |
| Egyptian Pound | EGP | Weekly |
| Eritrean Nakfa | ERN | Weekly |
| Ethiopian Birr | ETB | Weekly |
| Euro | EUR | Daily |
| Fijian Dollar | FJD | Weekly |
| British Pound | GBP | Daily |
| Georgian Lari | GEL | Weekly |
| Ghanaian Cedi | GHS | Weekly |
| Gibraltar Pound | GIP | Weekly |
| Gambian Dalasi | GMD | Weekly |
| Guinean Franc | GNF | Weekly |
| Guatemalan Quetzal | GTQ | Weekly |
| Guyanese Dollar | GYD | Weekly |
| Hong Kong Dollar | HKD | Daily |
| Honduran Lempira | HNL | Weekly |
| Haitian Gourde | HTG | Weekly |
| Hungarian Forint | HUF | Daily |
| Indonesian Rupiah | IDR | Daily |
| Israeli New Shekel | ILS | Daily |
| Indian Rupee | INR | Daily |
| Iraqi Dinar | IQD | Weekly |
| Iranian Rial | IRR | Weekly |
| Icelandic Krona | ISK | Daily |
| Jamaican Dollar | JMD | Weekly |
| Jordanian Dinar | JOD | Weekly |
| Japanese Yen | JPY | Daily |
| Kenyan Shilling | KES | Weekly |
| Kyrgyzstani Som | KGS | Weekly |
| Cambodian Riel | KHR | Weekly |
| Comorian Franc | KMF | Weekly |
| South Korean Won | KRW | Daily |
| Kuwaiti Dinar | KWD | Weekly |
| Kazakhstani Tenge | KZT | Weekly |
| Lao Kip | LAK | Weekly |
| Lebanese Pound | LBP | Weekly |
| Sri Lankan Rupee | LKR | Weekly |
| Liberian Dollar | LRD | Weekly |
| Lesotho Loti | LSL | Weekly |
| Libyan Dinar | LYD | Weekly |
| Moroccan Dirham | MAD | Weekly |
| Moldovan Leu | MDL | Weekly |
| Malagasy Ariary | MGA | Weekly |
| Macedonian Denar | MKD | Weekly |
| Myanmar Kyat | MMK | Weekly |
| Mongolian Tugrik | MNT | Weekly |
| Macanese Pataca | MOP | Weekly |
| Mauritanian Ouguiya | MRU | Weekly |
| Mauritian Rupee | MUR | Weekly |
| Maldivian Rufiyaa | MVR | Weekly |
| Malawian Kwacha | MWK | Weekly |
| Mexican Peso | MXN | Daily |
| Malaysian Ringgit | MYR | Daily |
| Mozambican Metical | MZN | Weekly |
| Namibian Dollar | NAD | Weekly |
| Nigerian Naira | NGN | Weekly |
| Nicaraguan Cordoba | NIO | Weekly |
| Norwegian Krone | NOK | Daily |
| Nepalese Rupee | NPR | Weekly |
| New Zealand Dollar | NZD | Daily |
| Omani Rial | OMR | Weekly |
| Panamanian Balboa | PAB | Weekly |
| Peruvian Sol | PEN | Weekly |
| Papua New Guinean Kina | PGK | Weekly |
| Philippine Peso | PHP | Daily |
| Pakistani Rupee | PKR | Weekly |
| Paraguayan Guarani | PYG | Weekly |
| Qatari Riyal | QAR | Weekly |
| Romanian Leu | RON | Daily |
| Serbian Dinar | RSD | Weekly |
| Russian Ruble | RUB | Daily |
| Rwandan Franc | RWF | Weekly |
| Saudi Riyal | SAR | Weekly |
| Solomon Islands Dollar | SBD | Weekly |
| Seychelles Rupee | SCR | Weekly |
| Sudanese Pound | SDG | Weekly |
| Swedish Krona | SEK | Daily |
| Singapore Dollar | SGD | Daily |
| Sierra Leonean Leone | SLE | Weekly |
| Somali Shilling | SOS | Weekly |
| Surinamese Dollar | SRD | Weekly |
| South Sudanese Pound | SSP | Weekly |
| Sao Tome Principe Dobra | STN | Weekly |
| Salvadoran Colon | SVC | Weekly |
| Syrian Pound | SYP | Weekly |
| Swazi Lilangeni | SZL | Weekly |
| Thai Baht | THB | Daily |
| Tajikistani Somoni | TJS | Weekly |
| Turkmenistani Manat | TMT | Weekly |
| Tunisian Dinar | TND | Weekly |
| Tongan Pa'anga | TOP | Weekly |
| Turkish Lira | TRY | Daily |
| Trinidad and Tobago Dollar | TTD | Weekly |
| New Taiwan Dollar | TWD | Weekly |
| Tanzanian Shilling | TZS | Weekly |
| Ukrainian Hryvnia | UAH | Daily |
| Ugandan Shilling | UGX | Weekly |
| United States Dollar | USD | Daily |
| Uruguayan Peso | UYU | Weekly |
| Uzbekistani Sum | UZS | Weekly |
| Venezuelan Bolívar Soberano | VES | Weekly |
| Vietnamese Dong | VND | Weekly |
| Vanuatu Vatu | VUV | Weekly |
| Samoan Tala | WST | Weekly |
| Central African CFA Franc | XAF | Weekly |
| East Caribbean Dollar | XCD | Weekly |
| West African CFA Franc | XOF | Weekly |
| CFP Franc | XPF | Weekly |
| Yemeni Rial | YER | Weekly |
| South African Rand | ZAR | Daily |
| Zambian Kwacha | ZMW | Weekly |
| Zimbabwe Gold | ZWG | Weekly |

Configuration option `data_source` value is `national_bank_of_poland`

### National Bank of Romania

> Reference: [https://www.bnr.ro/Exchange-rates-1224.aspx](https://www.bnr.ro/Exchange-rates-1224.aspx)

The base currency is Romanian leu (`RON`). The daily exchange rates are usually updated shortly after 13:00 EET (Eastern European Time) on every working day.

This data source supports 36 currencies, and all currencies are as follows:

| Currency | Currency Code | Update Frequency |
| --- | --- | --- |
| United Arab Emirates Dirham | AED | Daily |
| Australian Dollar | AUD | Daily |
| Bulgarian Lev | BGN | Daily |
| Brazilian Real | BRL | Daily |
| Canadian Dollar | CAD | Daily |
| Swiss Franc | CHF | Daily |
| Chinese Yuan | CNY | Daily |
| Czech Koruna | CZK | Daily |
| Danish Krone | DKK | Daily |
| Egyptian Pound | EGP | Daily |
| Euro | EUR | Daily |
| British Pound | GBP | Daily |
| Hong Kong Dollar | HKD | Daily |
| Hungarian Forint | HUF | Daily |
| Indonesian Rupiah | IDR | Daily |
| Israeli New Shekel | ILS | Daily |
| Indian Rupee | INR | Daily |
| Icelandic Krona | ISK | Daily |
| Japanese Yen | JPY | Daily |
| South Korean Won | KRW | Daily |
| Moldovan Leu | MDL | Daily |
| Mexican Peso | MXN | Daily |
| Malaysian Ringgit | MYR | Daily |
| Norwegian Krone | NOK | Daily |
| New Zealand Dollar | NZD | Daily |
| Philippine Peso | PHP | Daily |
| Polish Zloty | PLN | Daily |
| Serbian Dinar | RSD | Daily |
| Russian Ruble | RUB | Daily |
| Swedish Krona | SEK | Daily |
| Singapore Dollar | SGD | Daily |
| Thai Baht | THB | Daily |
| Turkish Lira | TRY | Daily |
| Ukrainian Hryvnia | UAH | Daily |
| United States Dollar | USD | Daily |
| South African Rand | ZAR | Daily |

Configuration option `data_source` value is `national_bank_of_romania`

### Bank of Russia

> Reference: [https://www.cbr.ru/eng/currency_base/daily/](https://www.cbr.ru/eng/currency_base/daily/)

The base currency is Russian ruble (`RUB`). The daily exchange rates are usually updated around 15:30 MCK (Moscow Time) on every working day.

This data source supports 42 currencies, and all currencies are as follows:

| Currency | Currency Code | Update Frequency |
| --- | --- | --- |
| United Arab Emirates Dirham | AED | Daily |
| Armenian Dram | AMD | Daily |
| Australian Dollar | AUD | Daily |
| Azerbaijan Manat | AZN | Daily |
| Bulgarian Lev | BGN | Daily |
| Brazilian Real | BRL | Daily |
| Belarusian Ruble | BYN | Daily |
| Canadian Dollar | CAD | Daily |
| Swiss Franc | CHF | Daily |
| Chinese Yuan | CNY | Daily |
| Czech Koruna | CZK | Daily |
| Danish Krone | DKK | Daily |
| Egyptian Pound | EGP | Daily |
| Euro | EUR | Daily |
| British Pound | GBP | Daily |
| Georgian Lari | GEL | Daily |
| Hong Kong Dollar | HKD | Daily |
| Hungarian Forint | HUF | Daily |
| Indonesian Rupiah | IDR | Daily |
| Indian Rupee | INR | Daily |
| Japanese Yen | JPY | Daily |
| Kyrgyzstani Som | KGS | Daily |
| South Korean Won | KRW | Daily |
| Kazakhstani Tenge | KZT | Daily |
| Moldovan Leu | MDL | Daily |
| Norwegian Krone | NOK | Daily |
| New Zealand Dollar | NZD | Daily |
| Polish Zloty | PLN | Daily |
| Qatari Riyal | QAR | Daily |
| Romanian Leu | RON | Daily |
| Serbian Dinar | RSD | Daily |
| Swedish Krona | SEK | Daily |
| Singapore Dollar | SGD | Daily |
| Thai Baht | THB | Daily |
| Tajikistani Somoni | TJS | Daily |
| Turkmenistani Manat | TMT | Daily |
| Turkish Lira | TRY | Daily |
| Ukrainian Hryvnia | UAH | Daily |
| United States Dollar | USD | Daily |
| Uzbekistani Sum | UZS | Daily |
| Vietnamese Dong | VND | Daily |
| South African Rand | ZAR | Daily |

Configuration option `data_source` value is `bank_of_russia`

### Swiss National Bank

> Reference: [https://www.snb.ch/en/the-snb/mandates-goals/statistics/statistics-pub/current_interest_exchange_rates](https://www.snb.ch/en/the-snb/mandates-goals/statistics/statistics-pub/current_interest_exchange_rates)

The base currency is Swiss franc (`CHF`). The daily exchange rates are usually updated about 11:00 GMT (Greenwich Mean Time) on every working day.

This data source supports 4 currencies, and all currencies are as follows:

| Currency | Currency Code | Update Frequency |
| --- | --- | --- |
| Euro | EUR | Daily |
| British Pound | GBP | Daily |
| Japanese Yen | JPY | Daily |
| United States Dollar | USD | Daily |

Configuration option `data_source` value is `swiss_national_bank`

### Central Bank of the Republic of Uzbekistan

> Reference: [https://cbu.uz/en/arkhiv-kursov-valyut/](https://cbu.uz/en/arkhiv-kursov-valyut/)

The base currency is Uzbekistani sum (`UZS`).

This data source supports 74 currencies, and all currencies are as follows:

| Currency | Currency Code | Update Frequency |
| --- | --- | --- |
| United Arab Emirates Dirham | AED | Daily |
| Afghan Afghani | AFN | Daily |
| Armenian Dram | AMD | Daily |
| Argentine Peso | ARS | Daily |
| Australian Dollar | AUD | Daily |
| Azerbaijan Manat | AZN | Daily |
| Bangladeshi Taka | BDT | Daily |
| Bulgarian Lev | BGN | Daily |
| Bahraini Dinar | BHD | Daily |
| Brunei Dollar | BND | Daily |
| Brazilian Real | BRL | Daily |
| Belarusian Ruble | BYN | Daily |
| Canadian Dollar | CAD | Daily |
| Swiss Franc | CHF | Daily |
| Chinese Yuan | CNY | Daily |
| Cuban Peso | CUP | Daily |
| Czech Koruna | CZK | Daily |
| Danish Krone | DKK | Daily |
| Algerian Dinar | DZD | Daily |
| Egyptian Pound | EGP | Daily |
| Euro | EUR | Daily |
| British Pound | GBP | Daily |
| Georgian Lari | GEL | Daily |
| Hong Kong Dollar | HKD | Daily |
| Hungarian Forint | HUF | Daily |
| Indonesian Rupiah | IDR | Daily |
| Israeli New Shekel | ILS | Daily |
| Indian Rupee | INR | Daily |
| Iraqi Dinar | IQD | Daily |
| Iranian Rial | IRR | Daily |
| Icelandic Krona | ISK | Daily |
| Jordanian Dinar | JOD | Daily |
| Japanese Yen | JPY | Daily |
| Kyrgyzstani Som | KGS | Daily |
| Cambodian Riel | KHR | Daily |
| South Korean Won | KRW | Daily |
| Kuwaiti Dinar | KWD | Daily |
| Kazakhstani Tenge | KZT | Daily |
| Lao Kip | LAK | Daily |
| Lebanese Pound | LBP | Daily |
| Libyan Dinar | LYD | Daily |
| Moroccan Dirham | MAD | Daily |
| Moldovan Leu | MDL | Daily |
| Myanmar Kyat | MMK | Daily |
| Mongolian Tugrik | MNT | Daily |
| Mexican Peso | MXN | Daily |
| Malaysian Ringgit | MYR | Daily |
| Norwegian Krone | NOK | Daily |
| New Zealand Dollar | NZD | Daily |
| Omani Rial | OMR | Daily |
| Philippine Peso | PHP | Daily |
| Pakistani Rupee | PKR | Daily |
| Polish Zloty | PLN | Daily |
| Qatari Riyal | QAR | Daily |
| Romanian Leu | RON | Daily |
| Serbian Dinar | RSD | Daily |
| Russian Ruble | RUB | Daily |
| Saudi Riyal | SAR | Daily |
| Sudanese Pound | SDG | Daily |
| Swedish Krona | SEK | Daily |
| Singapore Dollar | SGD | Daily |
| Syrian Pound | SYP | Daily |
| Thai Baht | THB | Daily |
| Tajikistani Somoni | TJS | Daily |
| Turkmenistani Manat | TMT | Daily |
| Tunisian Dinar | TND | Daily |
| Turkish Lira | TRY | Daily |
| Ukrainian Hryvnia | UAH | Daily |
| United States Dollar | USD | Daily |
| Uruguayan Peso | UYU | Daily |
| Venezuelan Bolívar Soberano | VES | Daily |
| Vietnamese Dong | VND | Daily |
| Yemeni Rial | YER | Daily |
| South African Rand | ZAR | Daily |

Configuration option `data_source` value is `central_bank_of_uzbekistan`

### International Monetary Fund

> Reference: [https://www.imf.org/external/np/fin/data/param_rms_mth.aspx](https://www.imf.org/external/np/fin/data/param_rms_mth.aspx)

The base currency is United States dollar (`USD`). The daily exchange rates are usually updated from 11:00 (Eastern Standard Time) to 18:00 EST on every working day.

This data source supports 37 currencies, and all currencies are as follows:

| Currency | Currency Code | Update Frequency |
| --- | --- | --- |
| United Arab Emirates Dirham | AED | Daily |
| Australian Dollar | AUD | Daily |
| Brunei Dollar | BND | Daily |
| Brazilian Real | BRL | Daily |
| Botswana Pula | BWP | Daily |
| Canadian Dollar | CAD | Daily |
| Swiss Franc | CHF | Daily |
| Chilean Peso | CLP | Daily |
| Chinese Yuan | CNY | Daily |
| Czech Koruna | CZK | Daily |
| Danish Krone | DKK | Daily |
| Algerian Dinar | DZD | Daily |
| Euro | EUR | Daily |
| British Pound | GBP | Daily |
| Israeli New Shekel | ILS | Daily |
| Indian Rupee | INR | Daily |
| Japanese Yen | JPY | Daily |
| South Korean Won | KRW | Daily |
| Kuwaiti Dinar | KWD | Daily |
| Mauritian Rupee | MUR | Daily |
| Mexican Peso | MXN | Daily |
| Malaysian Ringgit | MYR | Daily |
| Norwegian Krone | NOK | Daily |
| New Zealand Dollar | NZD | Daily |
| Omani Rial | OMR | Daily |
| Peruvian Sol | PEN | Daily |
| Philippine Peso | PHP | Daily |
| Polish Zloty | PLN | Daily |
| Qatari Riyal | QAR | Daily |
| Russian Ruble | RUB | Daily |
| Saudi Riyal | SAR | Daily |
| Swedish Krona | SEK | Daily |
| Singapore Dollar | SGD | Daily |
| Thai Baht | THB | Daily |
| Trinidad and Tobago Dollar | TTD | Daily |
| Uruguayan Peso | UYU | Daily |
| South African Rand | ZAR | Daily |

Configuration option `data_source` value is `international_monetary_fund`
