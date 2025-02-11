import { type AIList } from "../types/ApplicationIdentifierType";

export const Odette = <AIList>{
  // ============================================================================
  // // Category 1 (A): Reserved
  // A-999A: Reserved

  // ============================================================================
  // Category 2 (B): Container Information
  B: {
    identifier: "B",
    format: "",
    title: "Container Type",
    reg: /^(B)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Internally assigned or mutually defined",
  },
  "1B": {
    identifier: "1B",
    format: "",
    title: "Returnable Container Identification Code",
    reg: /^(1B)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Assigned by the container owner or the appropriate regulatory agency (e.g., a metal tub, basket, reel, unit load device (ULD), trailer, tank, or intermodal container) (excludes gas cylinders See '2B').",
  },
  "2B": {
    identifier: "2B",
    format: "",
    title: "Gas Cylinder Container Identification Code",
    reg: /^(2B)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Assigned by the manufacturer in conformance with U.S. Department of Transportation (D.O.T.) standards.",
  },
  "3B": {
    identifier: "3B",
    format: "",
    title: "Motor Freight Transport Equipment Identification Code",
    reg: /^(3B)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Assigned by the manufacturer in conformance with International Organization for Standardization (ISO) standards.",
  },
  "4B": {
    identifier: "4B",
    format: "an2+an4+an..10",
    title: "Standard Carrier Alpha Code (SCAC) ",
    reg: /^(4B)([\x30-\x39\x41-\x5A\x61-\x7A]{1,90})/,
    desc: "4 alphanumeric characters and an optional carrier assigned trailer number (one to ten alphanumeric characters). When used, the carrier assigned trailer number is separated from the SCAC by a dash “-“.",
  },
  "5B": {
    identifier: "5B",
    format: "an2+an..35",
    title: "Receptacle Asset Number",
    reg: /^(5B)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]{1,35})/,
    desc: "Consisting of two joined parts:\n⎯ Identification of an organization in accordance with ISO/IEC 15459 and a unique entity identification assigned in accordance with rules established by the issuing agency.\n⎯ A unique serial number assigned by the entity, ending with a 3-character container type code taken from EDIFACT Code List 8053 or UPU standard M82-3. (If the container type code listed is less than three characters in length, the field will be dash “-“ filled left to the length of three characters).",
  },
  // 6B: Reserved
  "7B": {
    identifier: "7B",
    format: "an2+an11",
    title: "Container Serial Number",
    reg: /^(7B)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]{11})/,
    desc: "According to ISO 6346. OC EI CSN CD, where the OC is the three letter owner code assigned in cooperation with BIC, the EI is the one letter equipment category identifier, the CSN is a 6-digit unique container identification assigned by the equipment owner, and CD is a modulus 11 check digit calculated in accordance with Annex A, ISO 6346.",
  },
  "8B": {
    identifier: "8B",
    format: "an2+an3",
    title: "Returnable Container Owner",
    reg: /^(8B)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]{3})/,
    desc: "Identification of a Returnable Container owner assigned in cooperation with BIC",
  },
  "9B": {
    identifier: "9B",
    format: "an2+an4",
    title: "Container Size/Type Code",
    reg: /^(9B)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]{4})/,
    desc: "According to ISO 6346, §4.2.",
  },
  "10B": {
    identifier: "10B",
    format: "an3+an4",
    title: "Container Ownership Code",
    reg: /^(10B)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]{4})/,
    desc: "Actual four-character abbreviation marked on the container by the owner. For DOD owned containers see Defense Transportation Regulation App EE-6.",
  },
  // TODO // 11B-55B
  // 56B-999B: Reserved for future assignment

  // ============================================================================
  // Category 3: Field Continuation
  C: {
    identifier: "C",
    format: "",
    title: "Continuation of an Item Code",
    reg: /^(C)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Continuation of an Item Code (Category 16) assigned by Customer that is too long for a required field size.",
  },
  "1C": {
    identifier: "1C",
    format: "",
    title: "Continuation of Traceability Code",
    reg: /^(1C)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Continuation of Traceability Code (Category 20) assigned by Supplier.",
  },
  "2C": {
    identifier: "2C",
    format: "",
    title: "Continuation of Serial Number",
    reg: /^(2C)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Continuation of Serial Number (Category 19) assigned by Supplier.",
  },
  "3C": {
    identifier: "3C",
    format: "",
    title: "Continuation of Free Text",
    reg: /^(3C)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Continuation of Free Text (Category 26) mutually defined between Supplier/Carrier/Customer.",
  },
  "4C": {
    identifier: "4C",
    format: "",
    title: "Continuation of Transaction Reference",
    reg: /^(4C)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Continuation of Transaction Reference (Category 11) mutually defined between Supplier/Carrier/Customer.",
  },
  "5C": {
    identifier: "5C",
    format: "",
    title: "Continuation of Item Code",
    reg: /^(5C)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Continuation of Item Code (Category 16) Assigned by Supplier.",
  },
  // 6C-999C: Reserved for future assignment

  // ============================================================================
  // Category 4 (D): Date
  D: {
    identifier: "D",
    format: "a1+n6",
    title: "Date",
    reg: /^(D)([\x30-\x39]{6})/,
    desc: "Format YYMMDD.",
  },
  "1D": {
    identifier: "1D",
    format: "an2+n6",
    title: "Date",
    reg: /^(1D)([\x30-\x39]{6})/,
    desc: "Format DDMMYY.",
  },
  "2D": {
    identifier: "2D",
    format: "an2+n6",
    title: "Date",
    reg: /^(2D)([\x30-\x39]{6})/,
    desc: "Format MMDDYY.",
  },
  "3D": {
    identifier: "3D",
    format: "an2+n4",
    title: "Date",
    reg: /^(3D)([\x30-\x39]{4})/,
    desc: "Format YDDD (Julian).",
  },
  "4D": {
    identifier: "4D",
    format: "an2+n5",
    title: "Date",
    reg: /^(4D)([\x30-\x39]{5})/,
    desc: "Format YYDDD (Julian).",
  },
  "5D": {
    identifier: "5D",
    format: "an2+n6+an3",
    title: "Date",
    reg: /^(5D)([\x30-\x39]{6}[\x30-\x39\x41-\x5A\x61-\x7A]{3})/,
    desc: "ISO format YYMMDD, immediately followed by an ANSI X12.3 Data Element Number 374 Qualifier providing a code specifying type of date (e.g., ship date, manufacture date).",
  },
  "6D": {
    identifier: "6D",
    format: "an2+n8+an3",
    title: "Date",
    reg: /^(6D)([\x30-\x39]{8}[\x30-\x39\x41-\x5A\x61-\x7A]{3})/,
    desc: "ISO format YYMMDD, immediately followed by an ANSI X12.3 Data Element Number 374 Qualifier providing a code specifying type of date (e.g., ship date, manufacture date).",
  },
  "7D": {
    identifier: "7D",
    format: "an2+n4",
    title: "Date",
    reg: /^(7D)([\x30-\x39]{5})/,
    desc: "Format MMYY.",
  },
  "8D": {
    identifier: "8D",
    format: "an2+n14..15",
    title: "Date",
    reg: /^(8D)([\x30-\x39]{14,15})/,
    desc: "Event, Date, And Time. ISO format YYYYMMDDHHMM (24 hour clock - UTC) immediately followed by a UN/EDIFACT Code Qualifier 2005 providing a code specifying type of date), e.g.\n11   [Date when goods are expected to be dispatched/shipped message is issued.]\n17   [Estimated delivery date/time when goods are expected to be delivered]\n35   [Date on which goods are delivered to their destination.]\n118  [Booking Confirmed]\n129  [Date when the vessel/merchandise departed the last foreign port in the exporting country.]\n132  [Date/time when the carrier estimates that a means of transport should arrive at the port of discharge or place of destination.]\n133  [Date/time when carrier estimates that a means of transport should depart at the place of departure]\n137  [Date/time when the supplier ships parts based on the customer's request. (Date when DESADV message is issued. Recommendation is the DESADV is issued within 30 minutes of goods being picked up at Ship-From party]\n146  [Estimated Entry date (Customs) date on which the official date of a Customs Entry is anticipated.]\n151  [Import Date (Arrived at port with intent to unlade]\n186  [Departs a Facility (“Gate-out)]\n204  [Date on which Customs releases merchandise to the carrier or importer]\n253  [Departs from a Port (“Vessel Departure”)]\n252  [Arrives at a Port (“Vessel Arrival”)]\n283  [Arrives at a Facility (“Gate-in)]\n342  [Conveyance Loaded]\n351  [Terminal Gate Inspection]\n411  [Ordered Stuffed]\n412  [Ordered Stripped]\n420  [Conveyance unloaded]\n534  [Repaired]\n677  [Confirmed Stuffed]\n678  [Confirmed Stripped]\n696  [Filing Date]",
  },
  "9D": {
    identifier: "9D",
    format: "",
    title: "Date",
    reg: /^(9D)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Structure and significance mutually defined.",
  },
  "10D": {
    identifier: "10D",
    format: "an3+n4",
    title: "Date",
    reg: /^(10D)([\x30-\x39]{4})/,
    desc: "Format YYWW.",
  },
  "11D": {
    identifier: "11D",
    format: "an3+n6",
    title: "Date",
    reg: /^(11D)([\x30-\x39]{6})/,
    desc: "Format YYYYWW.",
  },
  "12D": {
    identifier: "12D",
    format: "an3+n8",
    title: "Date",
    reg: /^(12D)([\x30-\x39]{8})/,
    desc: "Format YYYYMMDD.",
  },
  "13D": {
    identifier: "13D",
    format: "an3+n8",
    title: "Date",
    reg: /^(13D)([\x30-\x39]{8})/,
    desc: "Oldest and Newest Manufacturing Date in the format YYWWYYWW.",
  },
  "14D": {
    identifier: "14D",
    format: "an3+n8",
    title: "Expiration Date",
    reg: /^(14D)([\x30-\x39]{8})/,
    desc: "Format YYYYMMDD.",
  },
  "15D": {
    identifier: "15D",
    format: "an3+n8",
    title: "Expiration Date",
    reg: /^(15D)([\x30-\x39]{8})/,
    desc: "Format DDMMYYYY.",
  },
  "16D": {
    identifier: "16D",
    format: "an3+n8",
    title: "Production Date",
    reg: /^(16D)([\x30-\x39]{8})/,
    desc: "Format YYYYMMDD (Date of manufacture).",
  },
  "17D": {
    identifier: "17D",
    format: "an3+n8",
    title: "Date",
    reg: /^(17D)([\x30-\x39]{8})/,
    desc: "Format DDMMYYYY (Date of manufacture).",
  },
  "18D": {
    identifier: "18D",
    format: "an3+n12",
    title: "Tag Activation Time",
    reg: /^(18D)([\x30-\x39]{12})/,
    desc: "Format YYYYMMDDHHMM (24 hour clock - UTC).",
  },
  "19D": {
    identifier: "19D",
    format: "an3+n12",
    title: "Tag Deactivation Time",
    reg: /^(19D)([\x30-\x39]{12})/,
    desc: "Format YYYYMMDDHHMM (24 hour clock - UTC).",
  },
  "20D": {
    identifier: "20D",
    format: "an3+n8",
    title: "Inspection Date",
    reg: /^(20D)([\x30-\x39]{8})/,
    desc: "Format DDMMYYYY.",
  },
  "21D": {
    identifier: "21D",
    format: "",
    title: "Required Delivery Date",
    reg: /^(21D)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Format DDD Julian or DOD MILSTAMP Code.",
  },
  "22D": {
    identifier: "22D",
    format: "an3+n12",
    title: "Record Time",
    reg: /^(22D)([\x30-\x39]{12})/,
    desc: "Format YYYYMMDDHHMM (24 hour clock - UTC).",
  },
  "23D": {
    identifier: "23D",
    format: "",
    title: "Date",
    reg: /^(23D)([\x2E\x30-\x39]+)/,
    desc: "Date, represented in modified UTC compliant form: yyyy[mm[dd[hh[mm[ss[fff]]]]]][poooo] where square brackets indicate optionality and yyyy is the year, mmdd the month and day, hhmmss the time of day in hours minutes and seconds, fff the fractions of sections and poooo the offset from UTC expressed in hours and minutes, the offset being positive if p is a point (.), negative if P is a minus sign (-).\nEXAMPLE:\n2005                (UTC) calendar year 2005\n200505              (UTC) calendar month May 2005\n20050518            (UTC) 18 May 2005\n200505181247        12:47 UTC on 18 May 2005\n200505181247.0100   12:47 local time, being 11:47 UTC, on 18 May 2005\n20050518124723099   99 milliseconds after UTC 12:47:23 on 18 May 2005",
  },
  "24D": {
    identifier: "24D",
    format: "",
    title: "Qualified Date",
    reg: /^(24D)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Qualified Date, comprising the concatenation of:\n⎯ an ISO/IEC 15459 issuing agency code;\n⎯ a date qualifier conforming to the specifications of that issuing agency;\n⎯ a date whose format and interpretation comply with the specifications of the issuing agency for that date qualifier.",
  },
  "25D": {
    identifier: "25D",
    format: "an3+n8",
    title: "Best before date",
    reg: /^(25D)([\x30-\x39]{8})/,
    desc: "Format YYYYMMDD. Example: 25D20170202 = February 2, 2017",
  },
  "26D": {
    identifier: "26D",
    format: "an3+n8",
    title: "First freeze date",
    reg: /^(26D)([\x30-\x39]{8})/,
    desc: "Format YYYYMMDD. The first freeze date is defined as the date on which products are frozen directly after slaughtering, harvesting, catching or after initial processing. Example: 26D20170721 = July 21, 2017",
  },
  "27D": {
    identifier: "27D",
    format: "an3+n16",
    title: "Harvest date range",
    reg: /^(27D)([\x30-\x39]{16})/,
    desc: "Format YYYYMMDDYYYYMMDD. The start date and end date range over which harvesting occurred.\nFor example; animals were slaughtered or killed, fish were harvested, or a crop was harvested.\nThe data stream is defined as the first YYYYMMDD as the start date and the last YYYYMMDD as the end date.\nExample: 28D2017012320170214 = Start; January 23, 2017. End; February 14, 2017",
  },
  "28D": {
    identifier: "28D",
    format: "an3+n8",
    title: "Best before date",
    reg: /^(28D)([\x30-\x39]{8})/,
    desc: "Format YYYYMMDD. Example: 25D20170202 = February 2, 2017",
  },
  // 29D-999D: Reserved for future assignment

  // ============================================================================
  // Category 5 (E): Environmental Factors
  E: {
    identifier: "E",
    format: "a1+a2",
    title: "Restricted Substances Classification",
    reg: /^(E)([\x41-\x5A\x61-\x7A]{2})/,
    desc: "“Environmental Classification Code” including Lead-Free (Pb-Free) finish categories defined in JESD97 (IPC JEDEC J-STD-609), and future industry or governmental agency assigned codes related to environmental regulatory compliance and hazardous material content.",
  },
  "1E": {
    identifier: "1E",
    format: "",
    title: "Air Pressure",
    reg: /^(1E)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Air Pressure – (altitude) expressed in Pascal’s as the standard international measure.",
  },
  "2E": {
    identifier: "2E",
    format: "an2+n1..4",
    title: "Maximum Allowed Temperature",
    reg: /^(2E)([\x2D]?[\x30-\x39]{1,4})/,
    desc: "Degrees Celsius, “-” (minus) encoded, if required.",
  },
  "3E": {
    identifier: "3E",
    format: "an2+n1..4",
    title: "Minimum Allowed Temperature",
    reg: /^(3E)([\x2D]?[\x30-\x39]{1,4})/,
    desc: "Degrees Celsius, “-” (minus) encoded, if required.",
  },
  "4E": {
    identifier: "4E",
    format: "an2+n1..2",
    title: "Maximum Allowed Relative Humidity",
    reg: /^(4E)([\x30-\x39]{1,2})/,
    desc: "Implied as percent.",
  },
  "5E": {
    identifier: "5E",
    format: "an2+n1..2",
    title: "Minimum Allowed Relative Humidity",
    reg: /^(5E)([\x30-\x39]{1,2})/,
    desc: "Expressed as percent.",
  },
  "6E": {
    identifier: "6E",
    format: "an2+n1..4",
    title: "Refrigerator Container Temperature",
    reg: /^(6E)([\x2D]?[\x30-\x39]{1,4})/,
    desc: "For temperature-controlled cargo, target specified by shipper, Degrees Celsius, “-” (minus) encoded, if required.",
  },
  // 7E-9E: Reserved
  "10E": {
    identifier: "10E",
    format: "",
    title: "Cumulative Time Temperature Index",
    reg: /^(10E)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Expressed as the number of measurements or counts.",
  },
  "11E": {
    identifier: "11E",
    format: "",
    title: "Time Temperature Index",
    reg: /^(11E)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Time Temperature Index – Next Higher Assembly – expressed as the number of measurements or counts.",
  },
  "12E": {
    identifier: "12E",
    format: "an3+an9..15",
    title: "Declaration of Packaging Material Category, Code and Weight",
    reg: /^(12E)([\x30-\x39]{2}[\x30-\x39\x41-\x5A\x61-\x7A]{1,6}[\x2E\x30-\x39]{5}[\x41-\x5A\x61-\x7A]{2})/,
    desc: "Declaration of Packaging Material Category*, Code* and Weight for a given packaging material used in a given packaging according to the EU packaging and packaging waste directive. (Material category and code defined in Annex M). 12ECCMMMMMMNNNNNUU where\n- “12E” (an3) is the Data Identifier,\n- “CC” (n2) is the Material Category per Annex M, - “MMMMMM” (an1...6) is the Material Code per Annex M,\n- “NNNNN” (n5) Material Weight, including decimal point (e.g., 12.12),\n- “UU” (an2) is the Unit of measure for weight (e.g., KG, GR, LB or OZ per ANSI X12.3 as in Annex D).",
  },
  "13E": {
    identifier: "13E",
    format: "",
    title: "MSL Indicator",
    reg: /^(13E)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "The data following DI 13E will be one of the MSL indicators (1, 2, 2a, 3, 4, 5, 5a, 6) as shown in the LEVEL column in Table 5-1 of JEDEC standard IPC/JEDEC J-STD-020E. The Table is shown below for reference only; the currently released version of the referenced standard shall be used to obtain the correct MSL for the actual component.\nExample: 13E2a",
  },
  // 14E-999E: Reserved for future assignment

  // ============================================================================
  // Category 6 (F): Looping
  // TODO // Loop over the hierarchy!

  // ============================================================================
  // Category 7 (G): Reserved
  // G-999G: Reserved

  // ============================================================================
  // Category 8 (H): Human Resources
  H: {
    identifier: "H",
    format: "an1+an1..60",
    title: "Name of Party",
    reg: /^(H)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]{1,60})/,
    desc: "Name of a party followed by a plus (+) character followed by one or more code values from EDIFACT Code List 3035 “Party Qualifier”, e.g.,\nBY  [Buyer]\nCF  [Container operator]\nCN  [Consignee]\nCS  [Consolidator]\nDEI [Vessel operator/captain of vessel]\nFA  [Operational staff code]\nIM  [Importer]\nMF  [Manufacturer]\nOS  [Shipper]\nSE  [Seller]\nST  [Ship To]\nUC  [Ultimate consignee]",
  },
  "1H": {
    identifier: "1H",
    format: "",
    title: "Employee Identification Code",
    reg: /^(1H)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Assigned by employer",
  },
  "2H": {
    identifier: "2H",
    format: "an2+n9",
    title: "U.S. Social Security Number.",
    reg: /^2H(\x30-\x39]{9})/,
    desc: "",
  },
  "3H": {
    identifier: "3H",
    format: "",
    title: "ID Number for Non-Employee",
    reg: /^(3H)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Internally assigned or mutually defined (e.g., contract workers, vendors, service, and delivery personnel)",
  },
  "4H": {
    identifier: "4H",
    format: "",
    title: "National Social Security Number.",
    reg: /^(4H)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "",
  },
  "5H": {
    identifier: "5H",
    format: "",
    title: "Last Name",
    reg: /^(5H)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "",
  },
  "6H": {
    identifier: "6H",
    format: "an2+an1..35",
    title: "Party Name",
    reg: /^(6H)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]{1,35})/,
    desc: "(Line 2).",
  },
  "7H": {
    identifier: "7H",
    format: "an2+n10..15",
    title: "Contact Phone",
    reg: /^(7H)([\x20\x30-\x39]{1,35})/,
    desc: "Country Code, Area Code, Exchange, number [XX YYY ZZZ ZZZZ].",
  },
  "8H": {
    identifier: "8H",
    format: "an2+an3..35",
    title: "Contact Email",
    reg: /^(8H)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]{3,35})/,
    desc: "",
  },
  "9H": {
    identifier: "9H",
    format: "an2+an10..12",
    title: "Consignee Number",
    reg: /^(9H)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]{10,12})/,
    desc: "The unique identifying number can be the IRS, EIN, SSN, or the CBP assigned number, as required on the Security Filing.\nOnly the following formats shall be used:\nIRS EIN:            NN-NNNNNNN\nIRS EIN w/ suffix:  NN-NNNNNNNXX\nSSN:                NNN-NN-NNNN\nCBP assigned nbr:   YYDDPP-NNNNN",
  },
  "10H": {
    identifier: "10H",
    format: "",
    title: "Personal Identification Code",
    reg: /^(10H)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "First initial, Last initial, last four of SSN.",
  },
  "11H": {
    identifier: "11H",
    format: "",
    title: "First Name and Middle Initial",
    reg: /^(11H)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "",
  },
  "12H": {
    identifier: "12H",
    format: "an3+an2..3",
    title: "Military Grade",
    reg: /^(12H)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]{2,3})/,
    desc: "",
  },
  // 13H-14H: Reserved
  "15H": {
    identifier: "15H",
    format: "an3+an2+an1..an20",
    title: "National Identification Number",
    reg: /^(15H)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]{3,22})/,
    desc: "A National Identification Number, National Identity Number, or National Insurance Number used as a means of identifying individuals within a country for the purposes of work, taxation, government benefits, health care, and other governmentally-related functions.\nThis structure of the identifier is DI (15H) followed by the ISO 3166-1 Alpha2 Country Code followed by the predominant government assigned identification code for individuals.",
  },
  // 16H-24H: Reserved
  "25H": {
    identifier: "25H",
    format: "",
    title: "Globally Unique Personal ID",
    reg: /^(25H)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Assigned by a holder of a Company Identification Code (CIN) and including the related Issuing Agency Code (IAC) in accordance with ISO/IEC 15459 and its registry, structured as sequence of 3 concatenated data elements: IAC followed by CIN, followed by the ID unique within the holder's domain.",
  },
  "26H": {
    identifier: "26H",
    format: "an3+an3..35+“+”+a1..3",
    title: "Globally Unique Personal ID",
    reg: /^(26H)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]{3,35}\+[\x41-\x5A\x61-\x7A]{1,3})/,
    desc: "Globally Unique Personal ID, with a “Party Qualifier” code value from EDIFACT Code List 3035, assigned by a holder of a Company Identification Code (CIN) and including the related Issuing Agency Code (IAC) in accordance with ISO/IEC 15459 and its registry, structured as a sequence of 5 concatenated data elements: IAC followed by CIN, followed by an ID unique within the CIN holder's domain, followed by the Plus character (+) and a code value from EDIFACT Code List 3035 “Party Qualifier”, e.g.:\nBG  Employer\nGP  Packer\nLK  Patient\nLL  Patient companion\nLM  Medical treatment executant\nMF  Manufacturer of goods\nExample: 26HLHHIBC987XY65+LK",
  },
  // 27H-999H: Reserved for future assignment

  // ============================================================================
  // Category 9 (I): Reserved
  I: {
    identifier: "I",
    format: "",
    title: "Exclusive Assignment",
    reg: /^(I)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Vehicle Identification Number (VIN) as defined in the U.S. under 49 CFR, §§ 565 and internationally by ISO 3779. (These are completely compatible data structures).",
  },
  // 1I: Reserved
  "2I": {
    identifier: "2I",
    format: "",
    title: "Abbreviated VIN Code",
    reg: /^(2I)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "",
  },
  // 3I: Reserved – Prior assignment
  "4I": {
    identifier: "4I",
    format: "",
    title: "Globally unique transport vehicle identifier",
    reg: /^(4I)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "(e.g., Trucks)\nConsisting of the Vehicle Identification Number (VIN) as defined in the U.S. under 49 CFR §§ 565, and internationally by ISO 3779, followed by the “+” character, then followed by the government-issued Vehicle Registration License Plate Number in the form of “4I” “VIN” “+” “government-issued Vehicle Registration License Plate Number” (quotes and spaces shown for clarity only; they are not part of the data).",
  },
  "5I": {
    identifier: "5I",
    format: "",
    title: "Unique production vehicle identifier",
    reg: /^(5I)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Will be used during the vehicle production processes, consisting of the Body Tag Number (BTN; or any other descriptor used to identify the raw car body, or stated another way, the assemblage of parts that are used to start the vehicle’s production), followed by the “+” character, then followed by the Production Order Number (PON), followed by the “+” character, and then followed by the Manufacturer-assigned Serial Number (SN).\nNOTE: The SN component shall be replaced by the VIN as soon as the VIN is available in the assembly process.\nThe construction will be as follows;\n“5I” “BTN” “+” “PON“ “+” “SN”\n    changing to (when VIN available)\n“5I” “BTN” “+” “PON“ “+” “VIN”\nNOTE: Quotes and spaces are shown for clarity only; they are not part of the data.\nNOTE: This DI is never to be concatenated with other DIs in a linear symbol or other media where the concatenation character is a plus (+) character.\nExamples:\nSN version:   5IABCD1234+CO1234+W0L201600500001\nVIN version:  5IABCD1234+CO1234+W0L0XAP68F4050901",
  },
  // 6I-999I: Reserved - Not recommended for use due to similarity of "1" to "I".

  // ============================================================================
  // Category 10 (J): License Plate
  J: {
    identifier: "J",
    format: "an1+an1..35",
    title: "Unique license plate number",
    reg: /^(J)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]{1,35}})/,
    desc: "",
  },
  "1J": {
    identifier: "1J",
    format: "an2+an1..35",
    title: "Unique license plate number",
    reg: /^(1J)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]{1,35}})/,
    desc: "Assigned to a transport unit which is the lowest level of packaging, the unbreakable unit.",
  },
  "2J": {
    identifier: "2J",
    format: "an2+an1..35",
    title: "Unique license plate number",
    reg: /^(2J)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]{1,35}})/,
    desc: "Assigned to a transport unit which contains multiple packages.",
  },
  "3J": {
    identifier: "3J",
    format: "an2+an1..35",
    title: "Unique license plate number",
    reg: /^(3J)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]{1,35}})/,
    desc: "Assigned to a transport unit which is the lowest level of packaging, the unbreakable unit and which has EDI data associated with the unit.",
  },
  "4J": {
    identifier: "4J",
    format: "an2+an1..35",
    title: "Unique license plate number",
    reg: /^(4J)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]{1,35}})/,
    desc: "Assigned to a transport unit which contains multiple packages and which is associated with EDI data.",
  },
  "5J": {
    identifier: "5J",
    format: "an2+an1..20",
    title: "Unique license plate number",
    reg: /^(5J)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]{1,20}})/,
    desc: "Assigned to a mixed transport unit containing unlike items on a single customer transaction and may or may not have associated EDI data.",
  },
  "6J": {
    identifier: "6J",
    format: "an2+an1..20",
    title: "Unique license plate number",
    reg: /^(6J)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]{1,20}})/,
    desc: "Assigned to a master transport unit containing like items on a single customer transaction and may or may not have associated EDI data.",
  },
  "7J": {
    identifier: "7J",
    format: "",
    title: "Vehicle Registration License Plate Number",
    reg: /^(7J)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Not unique without identification of country and issuing governmental region/authority.",
  },
  "8J": {
    identifier: "8J",
    format: "an2+n9",
    title: "Maritime Mobile Service Identity (MMSI)",
    reg: /^(8J)([\x30-\x39]{9}})/,
    desc: "A nine digit number regulated by the International Telecommunications Union to uniquely identify a ship or a coast radio station.\nExample: 8J211123456",
  },
  // 9J-999J: Reserved for future assignment

  // ============================================================================
  // Category 11 (K): Transaction Reference Used In Trading Relationships
  K: {
    identifier: "K",
    format: "",
    title: "Order Number",
    reg: /^(K)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Assigned by Customer to identify a Purchasing Transaction (e.g., purchase order number).",
  },
  "1K": {
    identifier: "1K",
    format: "",
    title: "Order Number",
    reg: /^(1K)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Assigned by Supplier to identify a Purchasing Transaction.",
  },
  "2K": {
    identifier: "2K",
    format: "",
    title: "Bill of Lading/Waybill/Shipment Identification Code",
    reg: /^(2K)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Assigned by Supplier/Shipper.",
  },
  "3K": {
    identifier: "3K",
    format: "",
    title: "Bill of Lading/Waybill/Shipment Identification Code",
    reg: /^(3K)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Assigned by Carrier.",
  },
  "4K": {
    identifier: "4K",
    format: "",
    title: "Line Number",
    reg: /^(4K)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Line number of the order assigned by Customer to identify a Purchasing Transaction. (See Annex C.9).",
  },
  "5K": {
    identifier: "5K",
    format: "",
    title: "Reference Number",
    reg: /^(5K)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Assigned by the Customer to identify a Shipment Authorization (Release) against an established Purchase Order.",
  },
  "6K": {
    identifier: "6K",
    format: "",
    title: "PRO#",
    reg: /^(6K)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Assigned by Carrier.",
  },
  "7K": {
    identifier: "7K",
    format: "",
    title: "Carrier Mode",
    reg: /^(7K)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Free Text format mutually defined between Customer and Supplier (e.g., Air, Truck, Boat, Rail).",
  },
  "8K": {
    identifier: "8K",
    format: "",
    title: "Contract Number",
    reg: /^(8K)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "",
  },
  "9K": {
    identifier: "9K",
    format: "",
    title: "Generic Transaction Reference Code",
    reg: /^(9K)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Internally assigned or mutually defined",
  },
  "10K": {
    identifier: "10K",
    format: "",
    title: "Invoice Number",
    reg: /^(10K)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "",
  },
  "11K": {
    identifier: "11K",
    format: "",
    title: "Packing List Number",
    reg: /^(11K)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "",
  },
  "12K": {
    identifier: "12K",
    format: "an3+an4+an1..25 ",
    title: "SCAC",
    reg: /^(12K)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]{5,25})/,
    desc: "(Standard Carrier Alpha Code) (an4 - dash “-” filled left) and carrier assigned PROgressive number.",
  },
  "13K": {
    identifier: "13K",
    format: "an3+an4+an1..12 ",
    title: "Bill of Lading Number /Transport Receipt Number",
    reg: /^(13K)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]{5,12})/,
    desc: "SCAC + Container cargo’s B/L number or waybill number.",
  },
  "14K": {
    identifier: "14K",
    format: "",
    title: "Combined Order Number and Line Number",
    reg: /^(14K)([\x30-\x39]+\+[\x30-\x39]+)/,
    desc: "In the format nn...nn+nn...n where a plus (+) symbol is used as a delimiter between the Order Number and Line Number.",
  },
  "15K": {
    identifier: "15K",
    format: "",
    title: "KANBAN Number",
    reg: /^(15K)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "",
  },
  "16K": {
    identifier: "16K",
    format: "",
    title: "DELINS Number",
    reg: /^(16K)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Code assigned to identify a document which contains delivery information.",
  },
  "17K": {
    identifier: "17K",
    format: "",
    title: "Check Number",
    reg: /^(17K)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "",
  },
  "18K": {
    identifier: "18K",
    format: "",
    title: "Structured Reference",
    reg: /^(18K)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "(See Annex C.10)",
  },
  "19K": {
    identifier: "19K",
    format: "",
    title: "Foreign Military Sales Case Number",
    reg: /^(19K)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "",
  },
  "20K": {
    identifier: "20K",
    format: "",
    title: "License Identifier",
    reg: /^(20K)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Being a globally unique identifier for a license or contract under which items are generated, submitted for processing and/or paid for, that is constructed by concatenating:\n⎯ an ISO/IEC 15459 issuing agency code;\n⎯ a license or contract number which accords with specifications of the issuing agency concerned;\nand that:\n⎯ comprises only upper case alphabetic and/or numeric characters;\n⎯ is unique (that is, is distinct from any other ISO/IEC 15459 compliant identifier) within the domain of the issuing agency;\n⎯ cannot be derived from any other ISO/IEC 15459 compliant identifier, issued under the same issuing agency, by the simple addition of characters to, or their removal from, its end",
  },
  "21K": {
    identifier: "21K",
    format: "",
    title: "Customer Data",
    reg: /^(21K)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]{1,35})/,
    desc: "Being data that:\n⎯ from a customer perspective, is related to or associated with an item or transaction, or to a batch or related items or transactions, and\n⎯ comprises up to 35 printable characters and/or spaces, other than plus (+), drawn from the character set defined in ISO/IEC 646.",
  },
  "22K": {
    identifier: "22K",
    format: "",
    title: "Transaction Authentication Information",
    reg: /^(22K)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Being a value, constructed by concatenating:\n⎯ an ISO/IEC 15459 issuing agency code;\n⎯ a value which accords with specifications of the issuing agency concerned,\nthat allows verification of the authenticity of the transaction concerned and, in particular, that the transaction was initiated by the party, claimed within the transaction to have been its initiator, by:\n⎯ the recipient of a transaction, and/or\n⎯ one or more of the parties involved in its handling or processing, and/or\n⎯ a trusted third party",
  },
  // 23K-24K: Reserved
  "25K": {
    identifier: "25K",
    format: "",
    title: "Global Unique Identification of Groupings of Transport Units",
    reg: /^(25K)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Assigned by the Carrier, defined as: Identification of a Party to a Transaction as defined assigned by a holder of a Company Identification Number (CIN) and including the related Issuing Agency Code (IAC) in accordance with ISO/IEC 15459 and its registry, structured as a sequence of 3 concatenated data elements: IAC, followed by CIN, followed by the Bill of Lading or Waybill or Shipment Identification Code that is unique within the CIN holder's domain.",
  },
  "26K": {
    identifier: "26K",
    format: "",
    title: "Global Unique Identification of Groupings of Transport Units",
    reg: /^(26K)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Assigned by the Shipper, defined as: Identification of a Party to a Transaction assigned by a holder of a Company Identification Number (CIN) and including the related Issuing Agency Code (IAC) in accordance with ISO/IEC 15459 and its registry, structured as a sequence of 3 concatenated data elements: IAC, followed by CIN, followed by the Bill of Lading or Waybill or Shipment Identification Code that is unique within the CIN holder's domain.",
  },
  "27K": {
    identifier: "27K",
    format: "an3+an1..35",
    title: "Supplier Assigned Quotation Number",
    reg: /^(27K)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]{1,35})/,
    desc: "Number assigned to a quotation by the supplier in response to a request for quote from the customer.",
  },
  // 28K-999K: Reserved for future assignment

  // ============================================================================
  // Category 12 (L): Location reference
  L: {
    identifier: "L",
    format: "",
    title: "Storage Location",
    reg: /^(L)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "",
  },
  "1L": {
    identifier: "1L",
    format: "",
    title: "Location",
    reg: /^(1L)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "",
  },
  "2L": {
    identifier: "2L",
    format: "",
    title: "Ship To",
    reg: /^(2L)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Location Code defined by an industry standard or mutually defined.",
  },
  "3L": {
    identifier: "3L",
    format: "",
    title: "Ship From",
    reg: /^(3L)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Location Code defined by an industry standard or mutually defined.",
  },
  "4L": {
    identifier: "4L",
    format: "an2+a2",
    title: "Country of Origin",
    reg: /^(4L)([\x41-\x5A\x61-\x7A]{2})/,
    desc: "Two-character ISO 3166 country code. With agreement of trading partners and when the Country of Origin is mixed, Country Code “AA” shall be used.",
  },
  "5L": {
    identifier: "5L",
    format: "",
    title: "Ship For",
    reg: /^(5L)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Location Code defined by an industry standard or mutually defined.",
  },
  "6L": {
    identifier: "6L",
    format: "",
    title: "Route Code",
    reg: /^(6L)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Assigned by the supplier to designate a specific transportation path.",
  },
  "7L": {
    identifier: "7L",
    format: "an2+an6 ",
    title: "6-character Department of Defense Activity Code (DoDAAC).",
    reg: /^(7L)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]{6})/,
    desc: "",
  },
  "8L": {
    identifier: "8L",
    format: "",
    title: "Port of Embarkation",
    reg: /^(8L)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Mutually Defined.",
  },
  "9L": {
    identifier: "9L",
    format: "",
    title: "Port of Debarkation",
    reg: /^(9L)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Mutually Defined.",
  },
  // 10L: Reserved
  "11L": {
    identifier: "11L",
    format: "an3+n5..27",
    title: "Location",
    reg: /^(11L)([\x2D-\x2F\x30-\x39]{5,27})/,
    desc: "(Latitude/Longitude/Altitude) encoded in the format xnn.nnnnn/xnnn.nnnnnn/xnnnn",
  },
  "12L": {
    identifier: "12L",
    format: "an3+n5..27",
    title: "Ship To",
    reg: /^(12L)([\x2D-\x2F\x30-\x39]{5,27})/,
    desc: "(Latitude/Longitude/Altitude) encoded in the format xnn.nnnnn/xnnn.nnnnnn/xnnnn",
  },
  "13L": {
    identifier: "13L",
    format: "an3+n5..27",
    title: "Ship From",
    reg: /^(13L)([\x2D-\x2F\x30-\x39]{5,27})/,
    desc: "(Latitude/Longitude/Altitude) encoded in the format xnn.nnnnn/xnnn.nnnnnn/xnnnn",
  },
  // 14L: Reserved
  "15L": {
    identifier: "15L",
    format: "an3+n5..27",
    title: "Ship For",
    reg: /^(15L)([\x2D-\x2F\x30-\x39]{5,27})/,
    desc: "(Latitude/Longitude/Altitude) encoded in the format xnn.nnnnn/xnnn.nnnnnn/xnnnn",
  },
  "16L": {
    identifier: "16L",
    format: "an3+an1..60",
    title: "Tag Activation Location",
    reg: /^(16L)([\x20\x30-\x39\x41-\x5A\x61-\x7A]{1,60})/,
    desc: "English location name (character set: 0-9, A-Z <Space>).",
  },
  "17L": {
    identifier: "17L",
    format: "an3+an1..60",
    title: "Tag Deactivation Location",
    reg: /^(17L)([\x20\x30-\x39\x41-\x5A\x61-\x7A]{1,60})/,
    desc: "English location name (character set: 0-9, A-Z <Space>).",
  },
  "18L": {
    identifier: "18L",
    format: "an3+an2..12",
    title: "FAO Fishing Area Code",
    reg: /^(18L)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]{2,12})/,
    desc: "As defined by the Fisheries and Aquaculture Department of the FAO (http://www.fao.org. Search for Fishing Area Code sub-site).\nAll characters of the GS1 General Specification-defined sub-set of ISO/IEC 646 are allowed.\nExamples:\n18L37.1.3  Western Mediterranean Sea, Sardinia\n18L47.B.1  Atlantic, Southeast, SEAFO Division, Namibia EEZ\n18L67      Pacific, Northeast",
  },
  // 19L: Reserved
  "20L": {
    identifier: "20L",
    format: "",
    title: "Location: First Level",
    reg: /^(20L)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "(Interally assiged).",
  },
  "21L": {
    identifier: "21L",
    format: "",
    title: "Location: Second level",
    reg: /^(21L)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "(Interally assiged).",
  },
  "22L": {
    identifier: "22L",
    format: "",
    title: "Location: Third Level",
    reg: /^(22L)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "(Interally assiged).",
  },
  "23L": {
    identifier: "23L",
    format: "",
    title: "Location: Fourth Level",
    reg: /^(23L)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "(Interally assiged).",
  },
  "24L": {
    identifier: "24L",
    format: "",
    title: "Location: Fifth Level",
    reg: /^(24L)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "(Interally assiged).",
  },
  "25L": {
    identifier: "25L",
    format: "",
    title: "",
    reg: /^(25L)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "",
  },
  "26L": {
    identifier: "26L",
    format: "",
    title: "",
    reg: /^(26L)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "",
  },
  // TODO // Locations 27L-55L
  // 56L-999L: Reserved for future assignment

  // ============================================================================
  // Category 13 (M): Reserved
  // M: Reserved
  // 1M-9M: Reserved
  "10M": {
    identifier: "10M",
    format: "",
    title: "Army Form 2410 data",
    reg: /^(10M)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Format is data value preceded by the block number of the form 2410. Field lengths and acceptable characters can be found at; http://www.apd.army.mil/pdffiles/p738_751.pdf.",
  },
  "11M": {
    identifier: "11M",
    format: "",
    title: "Army Form 2408 data",
    reg: /^(11M)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Format is data value preceded by the block number of the form 2408. Field lengths and acceptable characters can be found at; http://www.apd.army.mil/pdffiles/p738_751.pdf.",
  },
  "12M": {
    identifier: "12M",
    format: "",
    title: "Army Form 2407 data",
    reg: /^(12M)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Format is data value preceded by the block number of the form 2407. Field lengths and acceptable characters can be found at; http://www.apd.army.mil/pdffiles/p738_751.pdf.",
  },
  "13M": {
    identifier: "13M",
    format: "",
    title: "Air Force Form 95 data",
    reg: /^(13M)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Format is data value preceded by the block number of the form 95. Field lengths and acceptable characters can be found at; http://www.gsa.gov/portal/forms/download/116418.",
  },
  "14M": {
    identifier: "14M",
    format: "",
    title: "Navy Form 4790 data",
    reg: /^(14M)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Format is data value preceded by the block number of the form 2410. Field lengths and acceptable characters can be found at; http://www.navair.navy.mil/logistics/4790/library/Chapter%2015.pdf.",
  },
  // 15M-999M: Reserved for future assignment

  // ============================================================================
  // Category 14 (N): Industry Assigned Codes
  N: {
    identifier: "N",
    format: "an1+an13..15 ",
    title: "N National/NATO Stock Number (NSN)",
    reg: /^(N)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]{13,15})/,
    desc: "",
  },
  "1N": {
    identifier: "1N",
    format: "",
    title: "Product Characteristic Data",
    reg: /^(1N)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Defined by the Chemical Industry Data Exchange (CIDX",
  },
  // 2N: Reserved
  "3N": {
    identifier: "3N",
    format: "",
    title: "Coding Structure (EIAJ)",
    reg: /^(3N)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "In Accordance with Format Defined by Electronic Industries Association Japan (EIAJ).",
  },
  "4N": {
    identifier: "4N",
    format: "",
    title: "Coding Structure (GS1)",
    reg: /^(4N)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Coding Structure and Formats in Accordance with GS1 Application Identifiers (AI plus data) (GS1).",
  },
  "5N": {
    identifier: "5N",
    format: "",
    title: "Coding Structure (AIAG)",
    reg: /^(5N)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Coding Structure and Formats in Accordance with AIAG Recommendations. The full Data Identifier is in the form 5Nxx where the “xx” is found in the full code list that can be found at http://www.mhi.org/standards - see under “MH10 Data Identifiers (Continuous Maintenance Version)”",
  },
  "6N": {
    identifier: "6N",
    format: "",
    title: "U.S. DOD Requisition and Issue Procedure Codes",
    reg: /^(6N)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "The format is the appropriate MILSTRIP code followed by the data value associated with that code. (The full list of codes is available at; http://www2.dla.mil/j-6/dlmso/elibrary/Manuals/DLM/MILSTRIP/MILSTRIP.pdf.",
  },
  "7N": {
    identifier: "7N",
    format: "",
    title: "U.S. Defense Transportation Regulation Codes",
    reg: /^(7N)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "The format is the DTR code followed by the appropriate data value associated with that code. (The full list of codes is available at; http://www.transcom.mil/dtr/part-ii/dtr_part_ii_toc.pdf.",
  },
  "8N": {
    identifier: "8N",
    format: "",
    title: "Production Animal Identification Codes",
    reg: /^(8N)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "The format is the production animal code followed by the appropriate data value associated with that code. The Technical Report and the full list of Extended Data Elements (codes) is maintained at;\nhttp://www.aimglobal.org/store/view_product.asp?id=4926441\nExtended Data Elements (Codes).\nhttp://www.aimglobal.org/store/view_product.asp?id=4926483\nTechnical Report.",
  },
  "9N": {
    identifier: "9N",
    format: "an2+an5..22",
    title: "Pharmacy Product Number (IFA)",
    reg: /^(9N)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]{5,22})/,
    desc: "Maintained by IFA (www.ifaffm.de) and structured as follows: Two-digit product registration agency code followed by the registered product number (assigned by product registration agencies) and two PPN check digits.",
  },
  "10N": {
    identifier: "10N",
    format: "",
    title: "Data by CIN Holder (IAC)",
    reg: /^(10N)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "NOTE: Due to an error in the assignment of DI “10N” (there is no central authority for data-definition nor maintenance), no new uses of DI “10N” should be implemented. The function of DI “10N” is established in Category 18, MISCELLANEOUS with DI “5R”. It is strongly recommended that existing applications that use DI “10N” migrate to DI 5R”.\n\nData in the format and using semantics defined by the holder of a Company Identification Number (CIN) that has been issued by an Issuing Agency Code (IAC) in accordance with ISO/IEC 15459, defined as a sequence of concatenated data elements: IAC, followed by CIN, followed by the separator character “:” (colon) followed by the data in the format and using semantics as defined by the CIN holder.\nNOTE: Only the data syntax rules (if any) as provided by the declared IAC+CIN within each DI “10N” data stream shall be applied to the data following DI 10N+IAC+CIN.",
  },
  "11N": {
    identifier: "11N",
    format: "",
    title: "Data (RLA)",
    reg: /^(11N)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "NOTE: Due to an error in the assignment of DI “11N” (the language which states: ‘DI “11N” shall never be encoded in a 2D or RFID tag together with any other DI elements.’ is not a valid statement), no new uses of DI “11N” should be implemented. The function of DI “11N” is established in DI “12N”. It is strongly recommended that existing applications that use DI “11N” migrate to DI “12N”.\n\nThe Data construct is defined and controlled by the RLA, and is comprised of 2 segments: the field identifier code, immediately followed by the data as defined for that element according to the data dictionary of the RLA. It is essentially a catalog of fields with standardized content. The Field Identifiers are posted at http://rla.org/11ncodes. The use and structure of these codes are defined at: http://rla.org/11nformat\nAdditional examples can be found at that site as well. DI “11N” shall never be encoded in a 2D or RFID tag together with any other DI elements.",
  },
  "12N": {
    identifier: "12N",
    format: "",
    title: "Data (RLA)",
    reg: /^(12N)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "The Data construct is defined and controlled by the RLA, comprised of 2 segments: the field identifier (FI) code, immediately followed by the data as defined for that element according to the data dictionary of the RLA. It is essentially a catalog of fields with standardized content. The Field Identifiers are posted at http://rla.org/12ncodes The use and structure of these codes are defined at: http://rla.org/12nformat. Examples can be found at that site",
  },
  // 13N-999N: Reserved for future assignment

  // ============================================================================
  // Category 15 (O): Reserved
  // O-999O: Not recommended for use due to similarity of "0" (zero) to "O" (letter).

  // ============================================================================
  // Category 16 (P): Item Information
  P: {
    identifier: "P",
    format: "",
    title: "Item Identification Code (Customer)",
    reg: /^(P)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Item Identification Code assigned by Customer.",
  },
  "1P": {
    identifier: "1P",
    format: "",
    title: "Item Identification Code (Supplier)",
    reg: /^(1P)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Item Identification Code assigned by Supplier.",
  },
  "2P": {
    identifier: "2P",
    format: "",
    title: "Revision Level",
    reg: /^(2P)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Code Assigned to Specify the Revision Level for an Item (e.g., engineering change level, edition, or revision).",
  },
  "3P": {
    identifier: "3P",
    format: "an2+n13..14",
    title: "Combined Manufacturer Identification Code/Item Code",
    reg: /^(3P)([\x30-\x39]{13,14})/,
    desc: "Under the 12/13-digit GS1 Formats, plus supplemental codes, if any.",
  },
  "4P": {
    identifier: "4P",
    format: "",
    title: "Item Code (GS1)",
    reg: /^(4P)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Item Code Portion of GS1 Formats.",
  },
  "5P": {
    identifier: "5P",
    format: "",
    title: "Freight Classification Item Number",
    reg: /^(5P)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Assigned by Carrier for Purposes of Rating Hazardous Materials (e.g., Motor Freight, Air, Boat, Rail Classification).",
  },
  "6P": {
    identifier: "6P",
    format: "",
    title: "Combined Supplier Identification and Item Code",
    reg: /^(6P)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Internally assigned or mutually defined.",
  },
  "7P": {
    identifier: "7P",
    format: "",
    title: "Common Language Equipment Identification (CLEI)",
    reg: /^(7P)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Assigned by the manufacturer to some telecommunications equipment.",
  },
  "8P": {
    identifier: "8P",
    format: "an2+n14",
    title: "GTIN-14 ",
    reg: /^(8P)([\x30-\x39]+)/,
    desc: "14-digit GS1 format for GTIN-14 code structure.",
  },
  "9P": {
    identifier: "9P",
    format: "",
    title: "Combined Manufacturer Identification Code",
    reg: /^(9P)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "9-digit DUNS number (assigned by Dun & Bradstreet) and the Item Code/Part Number (assigned by the manufacturer).",
  },
  "10P": {
    identifier: "10P",
    format: "",
    title: "Hazardous Material Code ",
    reg: /^(10P)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "As defined by ANSI X12.3 in the format Data Element 208 (1-character code qualifier) followed by Data Element 209 (Hazardous Material Code).",
  },
  "11P": {
    identifier: "11P",
    format: "an3+an10",
    title: "CLEI Code",
    reg: /^(11P)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]{10})/,
    desc: "10-character CLEI Code for telecommunications equipment.",
  },
  "12P": {
    identifier: "12P",
    format: "",
    title: "Document Type",
    reg: /^(12P)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "(e.g., Pick List, Design Drawing, etc.) (internally assigned or mutually defined).",
  },
  "13P": {
    identifier: "13P",
    format: "",
    title: "VMRS System Code",
    reg: /^(13P)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "",
  },
  "14P": {
    identifier: "14P",
    format: "",
    title: "VMRS System and Assembly Code",
    reg: /^(14P)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "",
  },
  "15P": {
    identifier: "15P",
    format: "",
    title: "VMRS System, Assembly, & Part Code",
    reg: /^(15P)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "",
  },
  "16P": {
    identifier: "16P",
    format: "",
    title: "VMRS System, Assembly, or Part Code. (User Modified)",
    reg: /^(16P)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "",
  },
  "17P": {
    identifier: "17P",
    format: "",
    title: "Combined GS1 Supplier Identification and Item Code",
    reg: /^(17P)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Assigned By The Supplier.",
  },
  "18P": {
    identifier: "18P",
    format: "",
    title: "Combined VMRS supplier ID and Supplier Assigned Part Number",
    reg: /^(18P)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "",
  },
  "19P": {
    identifier: "19P",
    format: "",
    title: "Component of an Item",
    reg: /^(19P)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "One product contained in multiple packages",
  },
  "20P": {
    identifier: "20P",
    format: "",
    title: "First Level (Customer)",
    reg: /^(20P)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Customer Assigned. Can be used to provide for Item identification (Item ID), which is different than or in addition to Item ID provided by “P”.",
  },
  "21P": {
    identifier: "21P",
    format: "",
    title: "Second Level (Customer)",
    reg: /^(21P)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Customer Assigned. Can be used to provide for Item identification (Item ID), which is different than or in addition to Item ID provided by “P”.",
  },
  "22P": {
    identifier: "22P",
    format: "",
    title: "Third Level (Customer)",
    reg: /^(22P)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Customer Assigned. Can be used to provide for Item identification (Item ID), which is different than or in addition to Item ID provided by “P”.",
  },
  "23P": {
    identifier: "23P",
    format: "",
    title: "Fourth Level (Customer)",
    reg: /^(23P)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Customer Assigned. Can be used to provide for Item identification (Item ID), which is different than or in addition to Item ID provided by “P”.",
  },
  "24P": {
    identifier: "24P",
    format: "",
    title: "Fifth Level (Customer)",
    reg: /^(24P)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Customer Assigned. Can be used to provide for Item identification (Item ID), which is different than or in addition to Item ID provided by “P”.",
  },
  "25P": {
    identifier: "25P",
    format: "",
    title: "Identification of a Party to a Transaction",
    reg: /^(25P)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Assigned by a Holder of a Company Identification Number (CIN) and including the related Issuing Agency Code (IAC) in accordance with ISO/IEC 15459 and its registry, structured as a sequence of 3 concatenated data elements: IAC, followed by CIN, followed by the supplier assigned part number that is unique within the CIN holder's domain.",
  },
  "26P": {
    identifier: "26P",
    format: "",
    title: "Part Number of Next Higher Assembly",
    reg: /^(26P)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "",
  },
  "27P": {
    identifier: "27P",
    format: "an3+n7..12",
    title: "Commodity HTS-6 Code",
    reg: /^(27P)([\x2E\x30-\x39]{7,12})/,
    desc: "Using the format: 4012.11 or 4012.11.4000 (Decimal point is expressly encoded) The Harmonized System (HS) Classification is a 6-digit standardized numerical method of classifying traded products. HS numbers are used by customs authorities around the world to identify products for the application of duties and taxes. Additional digits are added to the HS number by some governments to further distinguish products in certain categories. In the United States, numbers used to classify exported products are called “Schedule B” numbers. The U.S. Census Bureau administers the Schedule B system. Schedule B numbers, not HS numbers, must be provided on the Shippers’ Export Declaration (SED).\nhttp://www.niccomp.com/rohs/files/NIC_HTS1006.pdf\n\nImport codes are administered by the U.S. International Trade Commission (USITC). http://hts.usitc.gov/",
  },
  "28P": {
    identifier: "28P",
    format: "an3+an1..100",
    title: "Cargo Name",
    reg: /^(28P)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]{1,100})/,
    desc: "Plain language description (English).",
  },
  "29P": {
    identifier: "29P",
    format: "",
    title: "Product Classification Code (GMDN)",
    reg: /^(29P)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "As defined with the GMDN (Global Medical Device Nomenclature - http://www.gmdnagency.org).",
  },
  "30P": {
    identifier: "30P",
    format: "",
    title: "First Level (Supplier)",
    reg: /^(30P)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Supplier Assigned. Can be used to provide for Item identification (Item ID), which is different than or in addition to Item ID provided by “P”.",
  },
  "31P": {
    identifier: "31P",
    format: "",
    title: "Second Level (Supplier)",
    reg: /^(31P)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Supplier Assigned. Can be used to provide for Item identification (Item ID), which is different than or in addition to Item ID provided by “P”.",
  },
  "32P": {
    identifier: "32P",
    format: "",
    title: "Third Level (Supplier)",
    reg: /^(32P)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Supplier Assigned. Can be used to provide for Item identification (Item ID), which is different than or in addition to Item ID provided by “P”.",
  },
  "33P": {
    identifier: "33P",
    format: "",
    title: "Fourth Level (Supplier)",
    reg: /^(33P)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Supplier Assigned. Can be used to provide for Item identification (Item ID), which is different than or in addition to Item ID provided by “P”.",
  },
  "34P": {
    identifier: "34P",
    format: "",
    title: "Fifth Level (Supplier)",
    reg: /^(34P)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Supplier Assigned. Can be used to provide for Item identification (Item ID), which is different than or in addition to Item ID provided by “P”.",
  },
  // 35P-39P: Reserved
  "40P": {
    identifier: "40P",
    format: "",
    title: "MSDS ID (Customer)",
    reg: /^(40P)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "A Code Assigned BY A Customer TO THE Identification Number OF THE Manufacturer’s Material Safety Data Sheet (MSDS) document that describes the uses, hazards, and chemical composition of a hazardous material.",
  },
  // 41P-48P: Reserved
  "49P": {
    identifier: "49P",
    format: "an3+an3..9",
    title: "Export Controlled Item",
    reg: /^(49P)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]{3,9})/,
    desc: "Subject to export control and or restrictions as identified in the Wassenaar Arrangement. DI followed by the Alpha-2 ISO 3166 Country Code of the country that imposed the restriction followed by Wassenaar Code (http://www.wassenaar.org/controllists/index.html).",
  },
  "50P": {
    identifier: "50P",
    format: "an3+an3..35",
    title: "Manufacturer-Assigned Item Identifier",
    reg: /^(50P)((?=.{3,35}$)[\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]{1,34}\+[\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]{0,34})/,
    desc: "Comprising an item number assigned by the item manufacturer, followed by a plus (+) sign, followed - if required to uniquely identify the item within the manufacturer's product range - by a manufacturer-assigned item version.\nExample 50PABC+6 would represent item number ABC, item version 6\n\nNote: The item number shall always be followed by a plus sign, even if no item version is present. This is required to permit the unambiguous concatenation of manufacturer- assigned item identifier with another data construct using the concatenation character plus (+). For example, the combination of a 50P manufacturer-assigned item identifier with no item version and a serial number (Data identifier S) on an entity might be encoded as 50PDEF++S1234.",
  },
  "51P": {
    identifier: "51P",
    format: "",
    title: "Globally Unique Item Identifier",
    reg: /^(51P)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "comprising the Identification of a party to a transaction assigned by a holder of a Company Identification Number (CIN) and including the related Issuing Agency Code (IAC) in accordance with ISO/IEC 15459 and its registry, followed by a plus (+) sign, followed by the Manufacturer-assigned item identifier as defined with 50P\nExample: 51PJ4LBE0431863103+ABC+ would represent the item with item number ABC and no version number manufactured by the company with Belgian VAT number 0431863103.",
  },
  "52P": {
    identifier: "52P",
    format: "an3+an1..50",
    title: "Color Code",
    reg: /^(52P)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]{1,50})/,
    desc: "Color of an item/object identified by a code or term mutually agreed upon between trading partners.",
  },
  "53P": {
    identifier: "53P",
    format: "an3+a1+n4+an5..20",
    title: "Identifier for Specific Marine Equipment",
    reg: /^(53P)([\x41-\x5A\x61-\x7A]{1}[\x30-\x39]{4}[\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]{5,20})/,
    desc: "Approved under the European Union Directive on Marine Equipment (2014/90/EU) and Implementing Regulation (EU) 2018/608\n\nFormat:\n− DI (an3);\n− Type of conformity assessment (CA) module(s) set out in Annex II to Directive 2014/90/EU used for the conforming assessment (a1);\n− Notified body (NB) identification number assigned by the Commission in accordance with point 3.1 of Annex IV to Directive 2014/90/EU (n4);\n− Certificate (an5…20)",
  },
  "54P": {
    identifier: "54P",
    format: "an3+an1..35",
    title: "UDI-DI (Unique Device Identification - Device Identifier)",
    reg: /^(54P)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]{1,35})/,
    desc: "For Medical Devices (MD) and In-vitro-Diagnostics (IvD) as the unique key to public UDI data bases (GUDID, EUDAMED, etc.), according to national regulatory requirements, as outlined by the International Medical Device Regulators Forum (IMDRF). All printable characters of the UTF-8 character set are allowed.",
  },
  // 55P-999P: Reserved for future assignment

  // ============================================================================
  // Category 17 (Q): Measurement
  Q: {
    identifier: "Q",
    format: "",
    title: "Quantity",
    reg: /^(Q)([\x2E\x30-\x39]+)/,
    desc: "Quantity, Number of Pieces, or Amount (numeric only) (unit of measure and significance mutually defined.",
    overrideType: "number",
  },
  "1Q": {
    identifier: "1Q",
    format: "",
    title: "Theoretical Length/Weight",
    reg: /^(1Q)([\x2E\x30-\x39]+)/,
    desc: "Numeric only.",
    overrideType: "number",
  },
  "2Q": {
    identifier: "2Q",
    format: "",
    title: "Actual Weight",
    reg: /^(2Q)([\x2E\x30-\x39]+)/,
    desc: "Numeric only.",
    overrideType: "number",
  },
  "3Q": {
    identifier: "3Q",
    format: "an2+an2",
    title: "Unit of Measure",
    reg: /^(3Q)([\x41-\x5A\x61-\x7A]{2})/,
    desc: "As defined by the two character ANSI X12.3 Data Element Number 355 Unit of Measurement Code.",
  },
  "4Q": {
    identifier: "4Q",
    format: "",
    title: "Gross Amount",
    reg: /^(4Q)([\x2E\x30-\x39]+)/,
    desc: "",
    overrideType: "number",
  },
  "5Q": {
    identifier: "5Q",
    format: "",
    title: "Net Amount",
    reg: /^(5Q)([\x2E\x30-\x39]+)/,
    desc: "",
    overrideType: "number",
  },
  "6Q": {
    identifier: "6Q",
    format: "an2+n1..30+/+n1..30",
    title: "Multiple Containers Comprising a Single Product",
    reg: /^(6Q)([\x2E\x30-\x39]+\/[\x2E\x30-\x39]+)/,
    desc: "Where Multiple Containers Comprise a Single Product (the contents of each container must be combined with the content of the other containers to constitute a single product) the Data Identifier “6Q” shall be used to link the various containers. The format # of # (“this is the nth piece of x pieces to define the product”) Presented in the format “n/x”, where the “/” (slash) is used as a delimiter between two values.",
  },
  "7Q": {
    identifier: "7Q",
    format: "an2+n1..8+an2",
    title: "Quantity, Amount, or Number of Pieces",
    reg: /^(7Q)([\x2E\x30-\x39]{1,8}[\x41-\x5A\x61-\x7A]{2})/,
    desc: "In the format: Quantity followed by the two character ANSI X12.3 Data Element Number 355 Unit of Measurement Code",
  },
  "8Q": {
    identifier: "8Q",
    format: "an2+n4..6",
    title: "Container Rated Weight",
    reg: /^(8Q)([\x2E\x30-\x39]{4,6})/,
    desc: "Manufacturer-assigned weight carrying capability of the container. Assigned at time of manufacture. Unit of measure is kg.",
  },
  "9Q": {
    identifier: "9Q",
    format: "",
    title: "Piece Weight",
    reg: /^(9Q)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Weight of a single item.",
  },
  // 10Q: Reserved
  "11Q": {
    identifier: "11Q",
    format: "an3+n4..6",
    title: "Tare Weight",
    reg: /^(11Q)([\x2E\x30-\x39]{4,6})/,
    desc: "Weight of an empty container. Container body weight. Manufacturer-assigned weight of the empty container. Assigned at time of manufacture. Unit of measure is kg (Tare weight).",
  },
  "12Q": {
    identifier: "12Q",
    format: "an3+n1..10+an3",
    title: "Monetary Value",
    reg: /^(12Q)([\x2E\x30-\x39]{1,10}[\x41-\x5A\x61-\x7A]{3})/,
    desc: "Established by the Supplier in the format of: the value followed by an ISO 4217 data element code for representing unit of value of currencies and funds (e.g., 12Q2.50USD) (2.50 Monetary Value in USA Dollars) significance mutually defined.\nEntry Value;\nValue followed by an ISO 4217 data element code for representing unit of value of currencies and funds (e.g., 12Q2.50USD) (2.50 Monetary Value in USA Dollars)",
  },
  "13Q": {
    identifier: "13Q",
    format: "an3+n1..30+/+n1..30",
    title: "# of # Pieces In Shipment",
    reg: /^(13Q)([\x2E\x30-\x39]+\/[\x2E\x30-\x39]+)/,
    desc: "# of # (“this is the nth piece of x pieces in this shipment”) Presented in the format “n/x”, where the “/” (slash) is used as a delimiter between two values. See Annex C.6.3 for further information.",
  },
  "14Q": {
    identifier: "14Q",
    format: "",
    title: "Beginning Secondary Quantity.",
    reg: /^(14Q)([\x2E\x30-\x39]+)/,
    desc: "",
  },
  "15Q": {
    identifier: "15Q",
    format: "",
    title: "Ending Secondary Quantity",
    reg: /^(15Q)([\x2E\x30-\x39]+)/,
    desc: "",
  },
  "16Q": {
    identifier: "16Q",
    format: "",
    title: "Number Of Pieces in Van",
    reg: /^(16Q)([\x2E\x30-\x39]+)/,
    desc: "",
  },
  "17Q": {
    identifier: "17Q",
    format: "",
    title: "Number Of Shipments in Van",
    reg: /^(17Q)([\x2E\x30-\x39]+)/,
    desc: "",
  },
  "18Q": {
    identifier: "18Q",
    format: "",
    title: "Cube",
    reg: /^(18Q)([\x30-\x39]+(?:CR|CF))/,
    desc: "Cube expressed in cubic meters or cubic feet followed by the ANSI X12.3 data element number 355 unit of measure code (CR of CF). No implied decimal point.",
  },
  "19Q": {
    identifier: "19Q",
    format: "",
    title: "Width",
    reg: /^(19Q)([\x30-\x39]+(?:LC|LF))/,
    desc: "Width expressed in linear meters or linear feet followed by the ANSI X12.3 data element number 355 unit of measure code (LC or LF). No implied decimal point.",
  },
  "20Q": {
    identifier: "20Q",
    format: "",
    title: "Height",
    reg: /^(20Q)([\x30-\x39]+(?:LC|LF))/,
    desc: "Height expressed in linear meters or linear feet followed by the ANSI X12.3 data element number 355 unit of measure code (LC or LF). No implied decimal point.",
  },
  "21Q": {
    identifier: "21Q",
    format: "",
    title: "Length",
    reg: /^(21Q)([\x30-\x39]+(?:LC|LF))/,
    desc: "Length expressed in linear meters or linear feet followed by the ANSI X12.3 data element number 355 unit of measure code (LC or LF). No implied decimal point.",
  },
  "22Q": {
    identifier: "22Q",
    format: "",
    title: "Net Weight of Shipment",
    reg: /^(21Q)([\x30-\x39]+(?:LB|KG))/,
    desc: "Net Weight Of Shipment expressed in pounds or kilograms (kilos) followed by the ANSI X12.3 data element number 355 unit of measure (LB or KG). No implied decimal point.",
  },
  "23Q": {
    identifier: "23Q",
    format: "",
    title: "Van Length",
    reg: /^(23Q)([\x30-\x39]+(?:LC|LF))/,
    desc: "Van Length expressed in linear meters or linear feet followed by the ANSI X12.3 data element number 355 unit of measure (LC or LF). No implied decimal point.",
  },
  "24Q": {
    identifier: "24Q",
    format: "",
    title: "Inside Cube of Van",
    reg: /^(24Q)([\x30-\x39]+(?:CR|CF))/,
    desc: "Inside Cube of a Van expressed in cubic meters or cubic feet followed by the ANSI X12.3 data element number 355 of unit measure code (CR or CF). No implied decimal point.",
  },
  "25Q": {
    identifier: "25Q",
    format: "",
    title: "Net Explosive Weight",
    reg: /^(25Q)([\x30-\x39]+)/,
    desc: "Net Explosive Weight (a computed value of explosive equivalent expressed in pound of TNT). The measure of NEW is used internationally for explosive safety quantity distance arc computations. No implied decimal point.",
  },
  "26Q": {
    identifier: "26Q",
    format: "",
    title: "Packaging Level",
    reg: /^(26Q)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Packaging Level, specifying the hierarchical level of packaging in accordance with HIBC (Health Industry Bar Code) specifications.",
  },
  "27Q": {
    identifier: "27Q",
    format: "an3+an1..20 ",
    title: "Single Product Price Value, Net",
    reg: /^(27Q)([\x2E\x30-\x39]{1,20})/,
    desc: "Single Product Price Value, Net, “.” (dot) used as decimal point (e.g., 27Q1000.5 for the price value of 1000.50)\nStructure:      an3+an1…20\n                <DI><price value>\nCharacter set:  0 to 9, dot (ISO 646 ASCII value decimal 46, hexadecimal 2E).\nExample of encoding using a net price value of 1000: 27Q1000\nExample of encoding using a net price value of 1000.50: 27Q1000.5\nNOTE: If currency is required it can be taken from another data element used in same code, e.g., 12Q.",
    overrideType: "currency",
  },
  "28Q": {
    identifier: "28Q",
    format: "an3+an1..10",
    title: "Single Price Charge Value For Postage And Packaging",
    reg: /^(28Q)([\x2C\x2E\x30-\x39]{1,10})/,
    desc: "Single Price Charge Value For Postage And Packaging, “.” (dot) represents the position of a comma (e.g., 28Q100.50 for the value of 100,50)\nStructure:      an3+an1…10\n                <DI><price value>\nCharacter set:  0 to 9, dot\nExample of encoding using postage & packing value of 100: 28Q100\nExample of encoding using postage & packing value of 100,50: 28Q100.50\nNOTE: If currency is required it can be taken from another data element used in same code, e.g., 12Q.",
    overrideType: "currency",
  },
  "29Q": {
    identifier: "29Q",
    format: "an3+an1..6",
    title: "Discount Percentage",
    reg: /^(29Q)([\x2C\x2E\x30-\x39]{1,6})/,
    desc: "Discount Percentage, “.” (dot) represents the position of a comma (e.g., 29Q8.5 for a discount value of 8,5%)\nStructure:      an3+n1…6 (12.456)\n                <DI><discount percentage (%)>\nCharacter set:  0 to 9, dot\nExample of encoding using discount percentage of 10%: 29Q10\nExample of encoding using discount percentage of 8,5%: 29Q8.5",
  },
  "30Q": {
    identifier: "30Q",
    format: "an3+an1..5",
    title: "VAT Percentage",
    reg: /^(30Q)([\x2C\x2E\x30-\x39]{1,5})/,
    desc: "VAT Percentage, “.” (dot) represents the position of a comma (e.g., 30Q8.5 for the VAT value of 8,5%)\nStructure:      an3+an1…5 (12.45)\n                <DI><VAT percentage (%)>\nCharacter set:  0 to 9, dot\nExample of encoding using VAT percentage of 19%: 30Q19\nExample of encoding using VAT percentage of 8,5%: 30Q8.5",
  },
  "31Q": {
    identifier: "31Q",
    format: "an3+an3",
    title: "Currency (ISO 4217 Code)",
    reg: /^(31Q)([\x30-\x39\x41-\x5A\x61-\x7A]{3})/,
    desc: "Currency, ISO 4217 currency code.\nStructure:      an3+an3\n                <DI><Currency, e.g., EUR>\nCharacter set:  A-Z, 0 to 9\nExample of encoding using ISO alphabetic code of US Dollar: 31QUSD\nExample of encoding using ISO alphabetic code of EURO: 31QEUR\nExample of encoding using ISO numeric code of EURO: 31Q978",
  },
  // 32Q-999Q: Reserved for future assignment

  // ============================================================================
  // Category 18 (R): Miscellaneous
  // R: Reserved
  "1R": {
    identifier: "1R",
    format: "",
    title: "Return Authorization Code (RMA) (Supplier)",
    reg: /^(1R)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Assigned by the Supplier.",
  },
  "2R": {
    identifier: "2R",
    format: "",
    title: "Return Code (Customer)",
    reg: /^(2R)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Assigned by the Customer.",
  },
  // 3R: Reserved
  "4R": {
    identifier: "4R",
    format: "",
    title: "U.S. Department of Defense Identification Code (DoDIC)",
    reg: /^(4R)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "",
  },
  "5R": {
    identifier: "5R",
    format: "",
    title: "Data by CIN Holder (IAC)",
    reg: /^(5R)(.+)/,
    desc: "Data in the format and using semantics defined by the holder of a Company Identification Number (CIN) that has been issued by an Issuing Agency Code (IAC) in accordance with ISO/IEC 15459, defined as a sequence of concatenated data elements: IAC, followed by CIN, followed by the separator character “:” (colon) followed by the data in the format and using semantics as defined by the CIN holder.\nNOTE: Only the data syntax rules (if any) as provided by the declared IAC+CIN within each DI “5R” data stream shall be applied to the data following DI 5R+IAC+CIN.4.",
  },
  "6R": {
    identifier: "6R",
    format: "",
    title: "",
    reg: /^(6R)(.+)/,
    desc: "ISO/IEC 20248 digital signature data construct. If the underlying data carrier encoding is 7 bits, then only the ISO/IEC 20248 raw format may be used.\nExample with an URL format:\n<6R><https://20248.sigvr.it/?Oo586eJAMEYCIQCf31EqIJMLGclBpHLlRgBdO>\nExample with a raw format:\n<6R><Oo586eJAMEYCIQCf31EqIJMLGclBpHLlRgBdO>\nAn ISO/IEC 20248 data structure contains a digital signature which is used to verify the specified data elements of the message of data elements. The value of 6R, as the first parameter, and the data elements to be verified (stripped from all non-printable characters), as the second parameter, is passed to the ISO/IEC 20248 DecoderVerifier - which will return the verification result: ACCEPT, REJECT or ERROR(error code), and the JSON object of decoded ISO/IEC 20248 additional fields. The ISO/IEC 20248 data structure may contain additional fields and instructions to decode and verify one or more messages of data elements. These instructions will be processed by the ISO/IEC 20248 DecoderVerifier.",
  },
  "7R": {
    identifier: "7R",
    format: "an2+an1..3",
    title: "ASFIS Species Code",
    reg: /^(7R)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]{1,3})/,
    desc: "Aquatic Sciences and Fisheries Information System (ASFIS) ‘Inter-agency 3-alpha species code’, maintained by the Food and Agriculture Organization of the United Nations (www.fao.org, then search for “ASFIS”).\nExamples:\n7RMUC = Mud carp\n7RPCD = Australian freshwater herring\n7RWSH = Great white shark",
  },
  "8R": {
    identifier: "8R",
    format: "an2+an1..10",
    title: "ISSCFG Gear Code",
    reg: /^(8R)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]{1,10})/,
    desc: "Food and Agricultural Organization (FAO) International Standard Classification of Fishing Gears (ISSCFG) code. (www.fao.org)\nAll characters of the GS1 General Specification-defined sub-set of ISO/IEC 646 are allowed.\nExamples:\n8R02.1.0 = Beach seines\n8R03.1.5 = Shrimp trawls\n8R05.1.0 = Portable lift net",
  },
  "9R": {
    identifier: "9R",
    format: "an2+an2",
    title: "Fish and Seafood Production Method",
    reg: /^(9R)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]{2})/,
    desc: "Production method for fish and seafood as specified by the Fisheries and Aquaculture Department of the Food and Agricultural Organization (FAO) of the United Nations, according to EU Regulation 1379/2013. (www.fao.org).\nAll characters of the GS1 General Specification-defined sub-set of ISO/IEC 646 are allowed.\nExamples:\n9R01 = Caught at sea\n9R02 = Caught in fresh water\n9R03 = Farmed",
  },
  // 10RQ-999R: Reserved for future assignment

  // ============================================================================
  // Category 19 (S): Traceability Number For An Entity
  S: {
    identifier: "S",
    format: "",
    title: "Serial Number",
    reg: /^(S)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Serial Number or Code Assigned by the Supplier to an Entity for its Lifetime, (e.g., computer serial number, traceability number, contract tool identification).",
  },
  // TODO // 1S-97S
  // 98S-999S: Reserved for future assignment

  // ============================================================================
  // Category 20 (T): Traceability Number For Groups Of Entities
  T: {
    identifier: "T",
    format: "",
    title: "Serial Number",
    reg: /^(T)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Traceability Number assigned by the Customer to identify/trace a unique group of entities (e.g., lot, batch, heat).",
  },
  "1T": {
    identifier: "1T",
    format: "",
    title: "Traceability Number",
    reg: /^(1T)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Traceability Number assigned by the Supplier to identify/trace a unique group of entities (e.g., lot, batch, heat).",
  },
  // TODO // 2T-34T
  // 35T-999T: Reserved for future assignment

  // ============================================================================
  // TODO // Category 21 (U): UPU/MH 10/SC8 Agreed Upon Codes

  // ============================================================================
  // Category 22 (V): Party To The Transaction
  V: {
    identifier: "V",
    format: "",
    title: "Supplier Code",
    reg: /^(V)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Supplier Code Assigned by Customer",
  },
  "1V": {
    identifier: "1V",
    format: "",
    title: "Supplier Code",
    reg: /^(1V)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Supplier Code Assigned by Supplier",
  },
  "2V": {
    identifier: "2V",
    format: "",
    title: "Supplier Code",
    reg: /^(2V)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "U.P.C. Company Prefix.",
  },
  "3V": {
    identifier: "3V",
    format: "",
    title: "Supplier Code",
    reg: /^(3V)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "GS1 Company Prefix.",
  },
  // TODO // 4V-24V
  // 25V-999V: Reserved for future assignment

  // ============================================================================
  // Category 23 (W): Activity Reference
  W: {
    identifier: "W",
    format: "",
    title: "Work Order Number",
    reg: /^(W)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "(e.g., “Production Paper”) (internally assigned).",
  },
  "1W": {
    identifier: "1W",
    format: "",
    title: "Operation Sequence Number",
    reg: /^(1W)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "A number that defines the order of a particular operation in a series of operations, generally in a manufacturing or assembly process.",
  },
  "2W": {
    identifier: "2W",
    format: "",
    title: "Operation Code/Work Code",
    reg: /^(2W)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "The type of work to be performed (internally assigned or mutually defined).",
  },
  "3W": {
    identifier: "3W",
    format: "",
    title: "Combined Work Order Number and Operation Sequence Number",
    reg: /^(3W)([\x2E\x30-\x39]+\+[\x2E\x30-\x39]+)/,
    desc: "in the format nn...n+nn...n where a plus symbol (+) is used as a delimiter between the Work Order Number and the Operation Sequence Number.",
  },
  "4W": {
    identifier: "4W",
    format: "",
    title: "Status Code",
    reg: /^(4W)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "(internally assigned or mutually defined).",
  },
  "5W": {
    identifier: "5W",
    format: "",
    title: "Work Unit Code",
    reg: /^(5W)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Identifies system, subsystem, assembly, component etc. on which maintenance is performed.",
  },
  "6W": {
    identifier: "6W",
    format: "",
    title: "Nomenclature",
    reg: /^(6W)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "(internally assigned or mutually defined).",
  },
  // 7W-9W: Reserved
  "10W": {
    identifier: "10W",
    format: "",
    title: "Form Control Number",
    reg: /^(10W)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Preprinted control number on forms.",
  },
  "11W": {
    identifier: "11W",
    format: "",
    title: "Quality Assurance Inspector",
    reg: /^(11W)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Last Name.",
  },
  "12W": {
    identifier: "12W",
    format: "",
    title: "Telephone Number of Person/Activity Completing the Form",
    reg: /^(12W)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Expressed in the format (country code) city or area code plus local number i.e. (1) 319 555 1212.",
  },
  // 13W-999W: Reserved for future assignment

  // ============================================================================
  // Category 24 (X): Reserved
  // X-999X: Reserved

  // ============================================================================
  // Category 25 (Y): Internal Applications
  xxY: {
    identifier: "xxY",
    format: "",
    title: "Internal Application",
    reg: /^(\d{1,3}Y)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "Never to appear on item/document which leaves a closed system environment",
  },
  // Y-999Y: Never to appear on item/document which leaves a closed system environment

  // ============================================================================
  // Category 26 (Z): Mutually Defined
  Z: {
    identifier: "Z",
    format: "",
    title: "Mutually Defined Between Customer and Supplier",
    reg: /^(Z)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "",
  },
  "1Z": {
    identifier: "1Z",
    format: "",
    title: "Mutually Defined Between Carrier and Supplier",
    reg: /^(1Z)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "",
  },
  "2Z": {
    identifier: "2Z",
    format: "",
    title: "Mutually Defined Between Customer and Carrier",
    reg: /^(2Z)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "",
  },
  "3Z": {
    identifier: "3Z",
    format: "",
    title: "Free Text",
    reg: /^(3Z)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "",
  },
  "4Z": {
    identifier: "4Z",
    format: "",
    title: "Mutually Defined Between Carrier and Trading Partner",
    reg: /^(4Z)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "",
  },
  // 5Z-9Z: Reserved
  xxZ: {
    identifier: "xxZ",
    format: "",
    title: "Structured Free Text",
    reg: /^(\d{2}Z)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "(Line 1-89 Data)",
  },
  "10Z": {
    identifier: "10Z",
    format: "",
    title: "Structured Free Text",
    reg: /^(10Z)([\x20-\x22\x25-\x2F\x30-\x39\x3A-\x3F\x41-\x5A\x5F\x61-\x7A]+)/,
    desc: "(Header Data).",
  },
  // 100Z-999Z: Reserved for future assignment
};
