import React from "react";
import { useState, useContext } from "react";
import { PageContext } from "../App";
import { Pix1, Pix2, Pix3, Pix4, Pix5, Pix7 } from "../../assets/GetInvolved";

/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react";
// import Carouseler from "./Carousel";
import { FreightList } from "./FlightList";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const componentsArray = [
  {
    Illustration: Pix1,
    TextList: {
      title: "Electricity",
      link: "How much Electricity do you use at home in KWh",

      text: "How much Electricity do you use at home in KWh",
    },
  },
  {
    Illustration: Pix2,
    TextList: {
      title: "Natural Gas",
      link: "Corporate-gifting-to-customers",
      text: "How much Natural Gas do you use at home in KWh",
    },
  },
  {
    Illustration: Pix3,
    TextList: {
      title: "Heating Oil",
      link: "Use-as-Employee-engagement",
      text: "How much How much heating oil do you use at home in KWh",
    },
  },
  {
    Illustration: Pix4,
    TextList: {
      title: "Coal",
      link: "Unique-Reward",
      text: "How much Coal do you use at home in KWh",
    },
  },
  {
    Illustration: Pix5,
    TextList: {
      title: "LPG",
      link: "Loyalty-Program-to-Customers",
      text: "How much LPG do you use at home in KWh",
    },
  },
  {
    Illustration: Pix7,
    TextList: {
      title: "Propane",
      link: "Use-Tree-in-Corporate-Social-Responsibility-(CSR)",
      text: "How much Propane do you use at home in KWh",
    },
  },
  {
    Illustration: Pix7,
    TextList: {
      title: "Wood",
      link: "Use-Tree-in-Corporate-Social-Responsibility-(CSR)",
      text: "How much Wood do you use at home in KWh",
    },
  },
];

const flightsArray = [
  {
    Illustration: Pix1,
    TextList: {
      title: "Motorbike",
      link: "How much Motorbike do you use at home in KWh",

      text: "How much Motorbike do you use at home in KWh",
    },
  },
  {
    Illustration: Pix2,
    TextList: {
      title: "Bus",
      link: "Corporate-gifting-to-customers",
      text: "How much Natural Gas do you use at home in KWh",
    },
  },
  {
    Illustration: Pix3,
    TextList: {
      title: "Subway",
      link: "Use-as-Employee-engagement",
      text: "How much How much heating oil do you use at home in KWh",
    },
  },
  {
    Illustration: Pix4,
    TextList: {
      title: "Taxi",
      link: "Unique-Reward",
      text: "How much Coal do you use at home in KWh",
    },
  },
  {
    Illustration: Pix5,
    TextList: {
      title: "Rail",
      link: "Loyalty-Program-to-Customers",
      text: "How much LPG do you use at home in KWh",
    },
  },
  {
    Illustration: Pix7,
    TextList: {
      title: "Sea",
      link: "Use-Tree-in-Corporate-Social-Responsibility-(CSR)",
      text: "How much Propane do you use at home in KWh",
    },
  },
  {
    Illustration: Pix7,
    TextList: {
      title: "Fuel",
      link: "Use-Tree-in-Corporate-Social-Responsibility-(CSR)",
      text: "How much Wood do you use at home in KWh",
    },
  },
];

const freightArray = [
  {
    Illustration: Pix1,
    TextList: {
      title: "Road Freight",
      link: "How much Motorbike do you use at home in KWh",

      text: "How much Motorbike do you use at home in KWh",
    },
  },
  {
    Illustration: Pix2,
    TextList: {
      title: "Air Freight",
      link: "Corporate-gifting-to-customers",
      text: "How much Natural Gas do you use at home in KWh",
    },
  },
  {
    Illustration: Pix3,
    TextList: {
      title: "Rail Freight",
      link: "Use-as-Employee-engagement",
      text: "How much How much heating oil do you use at home in KWh",
    },
  },
  {
    Illustration: Pix4,
    TextList: {
      title: "Sea Freight",
      link: "Unique-Reward",
      text: "How much Coal do you use at home in KWh",
    },
  },
];

const wasteArray = [
  {
    Illustration: Pix1,
    TextList: {
      title: "Construction Waste",
      link: "How much Motorbike do you use at home in KWh",

      text: "How much Motorbike do you use at home in KWh",
    },
  },
  {
    Illustration: Pix2,
    TextList: {
      title: "Electrical Waste",
      link: "Corporate-gifting-to-customers",
      text: "How much Natural Gas do you use at home in KWh",
    },
  },
  {
    Illustration: Pix3,
    TextList: {
      title: "General Waste",
      link: "Use-as-Employee-engagement",
      text: "How much How much heating oil do you use at home in KWh",
    },
  },
  {
    Illustration: Pix4,
    TextList: {
      title: "Plastic Waste",
      link: "Unique-Reward",
      text: "How much Coal do you use at home in KWh",
    },
  },
  {
    Illustration: Pix4,
    TextList: {
      title: "Metal Waste",
      link: "Unique-Reward",
      text: "How much Coal do you use at home in KWh",
    },
  },
];

function FootprintSection() {
  const {} = useContext(PageContext);
  const [showWaste, setshowWaste] = useState(false);
  const [showTransport, setshowTransport] = useState(false);
  const [showHome, setshowHome] = useState(false);
  const [showWelcome, setshowWelcome] = useState(true);
  const [showCloth, setshowCloth] = useState(false);
  const [showSec, setshowSec] = useState(false);

  function CompaniesList({ Pix, TextList, Index }) {
    return (
      <div className="BG-lgreen ">
        <div className="py-5  flex  flex-col  flex-wrapitems-center justify-center BG1">
          {Index % 2 === 0 ? (
            <div className="container flex items-center max-w-screen-xl m-auto py-5 md:py-10 md:px-15 text-gray-600  md:px-12 xl:px-22 bg-white  w-screen">
              <div className="space-y-6 md:space-y-0 md:flex justify-center m-auto md:gap-6 lg:items-center lg:gap-12 ">
                <div className="text-center md:6/12 lg:w-6/12 md:ml-12 mx-3">
                  <h2 className="text-2xl lgreen font-bold md:text-4xl">
                    {TextList.title}
                  </h2>
                  <div className="mt-6 text-gray-600 leading-loose">
                    {TextList.text}
                  </div>
                  <div className="flex flex-wrap gap-4 mt-10 text-center mx-auto w-1/2">
                    <input
                      type="number"
                      id="state"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="0"
                      required
                    />
                  </div>
                </div>
                <div className="md:6/12 lg:w-6/12 w-8/10 mx-auto">
                  <img
                    src={Pix}
                    alt="Location pins illustration"
                    loading="lazy"
                    className="mx-auto"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="container flex items-center max-w-screen-xl m-auto py-5 md:py-10 text-gray-600  md:px-12 xl:px-22  BG-lgreen w-screen">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                <div className="md:5/12 lg:w-6/12 w-9/10 mx-auto">
                  <img
                    src={Pix}
                    alt="Location pins illustration"
                    loading="lazy"
                    className="mx-auto"
                  />
                </div>
                <div className="text-center md:6/12 lg:w-6/12 md:ml-12 mx-3">
                  <h2 className="text-2xl lgreen font-bold md:text-4xl">
                    {TextList.title}
                  </h2>
                  <div className="mt-6 text-gray-600 leading-loose">
                    {TextList.text}
                  </div>
                  <div className="flex flex-wrap gap-4 mt-10 text-center mx-auto w-1/2">
                    <input
                      type="number"
                      id="state"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="0"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  const Welcome = () => {
    return (
      <div>
        <div className="BG-lgreen ">
          <h1 className="text-2xl  sm:(text-5xl !leading-tight) pt-8 mx-4 font-medium capitalize lgreen">
            Welcome to the Carbon Footprint Calculator
          </h1>

          <div className="py-10  flex  flex-col  flex-wrapitems-center justify-center BG1">
            <div className="container flex items-center max-w-screen-xl m-auto py-10 md:py-20 md:px-15 text-gray-600  md:px-12 xl:px-22  BG-lgreen w-screen">
              <div className="space-y-6 md:space-y-0 md:flex justify-center m-auto md:gap-6 lg:items-center lg:gap-12 ">
                <div className="text-left md:6/12 lg:w-6/12 md:ml-12 mx-3">
                  <h2 className="text-2xl lgreen font-bold md:text-4xl">
                    Where do you Live?
                  </h2>
                  <div className="mt-6 text-gray-600 leading-loose">
                    <label
                      for="country"
                      class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                    >
                      Country
                    </label>

                    <select
                      id="country"
                      name="country"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option>select country</option>
                      <option value="AF">Afghanistan</option>
                      <option value="AX">Aland Islands</option>
                      <option value="AL">Albania</option>
                      <option value="DZ">Algeria</option>
                      <option value="AS">American Samoa</option>
                      <option value="AD">Andorra</option>
                      <option value="AO">Angola</option>
                      <option value="AI">Anguilla</option>
                      <option value="AQ">Antarctica</option>
                      <option value="AG">Antigua and Barbuda</option>
                      <option value="AR">Argentina</option>
                      <option value="AM">Armenia</option>
                      <option value="AW">Aruba</option>
                      <option value="AU">Australia</option>
                      <option value="AT">Austria</option>
                      <option value="AZ">Azerbaijan</option>
                      <option value="BS">Bahamas</option>
                      <option value="BH">Bahrain</option>
                      <option value="BD">Bangladesh</option>
                      <option value="BB">Barbados</option>
                      <option value="BY">Belarus</option>
                      <option value="BE">Belgium</option>
                      <option value="BZ">Belize</option>
                      <option value="BJ">Benin</option>
                      <option value="BM">Bermuda</option>
                      <option value="BT">Bhutan</option>
                      <option value="BO">Bolivia</option>
                      <option value="BQ">
                        Bonaire, Sint Eustatius and Saba
                      </option>
                      <option value="BA">Bosnia and Herzegovina</option>
                      <option value="BW">Botswana</option>
                      <option value="BV">Bouvet Island</option>
                      <option value="BR">Brazil</option>
                      <option value="IO">British Indian Ocean Territory</option>
                      <option value="BN">Brunei Darussalam</option>
                      <option value="BG">Bulgaria</option>
                      <option value="BF">Burkina Faso</option>
                      <option value="BI">Burundi</option>
                      <option value="KH">Cambodia</option>
                      <option value="CM">Cameroon</option>
                      <option value="CA">Canada</option>
                      <option value="CV">Cape Verde</option>
                      <option value="KY">Cayman Islands</option>
                      <option value="CF">Central African Republic</option>
                      <option value="TD">Chad</option>
                      <option value="CL">Chile</option>
                      <option value="CN">China</option>
                      <option value="CX">Christmas Island</option>
                      <option value="CC">Cocos (Keeling) Islands</option>
                      <option value="CO">Colombia</option>
                      <option value="KM">Comoros</option>
                      <option value="CG">Congo</option>
                      <option value="CD">
                        Congo, Democratic Republic of the Congo
                      </option>
                      <option value="CK">Cook Islands</option>
                      <option value="CR">Costa Rica</option>
                      <option value="CI">Cote D'Ivoire</option>
                      <option value="HR">Croatia</option>
                      <option value="CU">Cuba</option>
                      <option value="CW">Curacao</option>
                      <option value="CY">Cyprus</option>
                      <option value="CZ">Czech Republic</option>
                      <option value="DK">Denmark</option>
                      <option value="DJ">Djibouti</option>
                      <option value="DM">Dominica</option>
                      <option value="DO">Dominican Republic</option>
                      <option value="EC">Ecuador</option>
                      <option value="EG">Egypt</option>
                      <option value="SV">El Salvador</option>
                      <option value="GQ">Equatorial Guinea</option>
                      <option value="ER">Eritrea</option>
                      <option value="EE">Estonia</option>
                      <option value="ET">Ethiopia</option>
                      <option value="FK">Falkland Islands (Malvinas)</option>
                      <option value="FO">Faroe Islands</option>
                      <option value="FJ">Fiji</option>
                      <option value="FI">Finland</option>
                      <option value="FR">France</option>
                      <option value="GF">French Guiana</option>
                      <option value="PF">French Polynesia</option>
                      <option value="TF">French Southern Territories</option>
                      <option value="GA">Gabon</option>
                      <option value="GM">Gambia</option>
                      <option value="GE">Georgia</option>
                      <option value="DE">Germany</option>
                      <option value="GH">Ghana</option>
                      <option value="GI">Gibraltar</option>
                      <option value="GR">Greece</option>
                      <option value="GL">Greenland</option>
                      <option value="GD">Grenada</option>
                      <option value="GP">Guadeloupe</option>
                      <option value="GU">Guam</option>
                      <option value="GT">Guatemala</option>
                      <option value="GG">Guernsey</option>
                      <option value="GN">Guinea</option>
                      <option value="GW">Guinea-Bissau</option>
                      <option value="GY">Guyana</option>
                      <option value="HT">Haiti</option>
                      <option value="HM">
                        Heard Island and Mcdonald Islands
                      </option>
                      <option value="VA">Holy See (Vatican City State)</option>
                      <option value="HN">Honduras</option>
                      <option value="HK">Hong Kong</option>
                      <option value="HU">Hungary</option>
                      <option value="IS">Iceland</option>
                      <option value="IN">India</option>
                      <option value="ID">Indonesia</option>
                      <option value="IR">Iran, Islamic Republic of</option>
                      <option value="IQ">Iraq</option>
                      <option value="IE">Ireland</option>
                      <option value="IM">Isle of Man</option>
                      <option value="IL">Israel</option>
                      <option value="IT">Italy</option>
                      <option value="JM">Jamaica</option>
                      <option value="JP">Japan</option>
                      <option value="JE">Jersey</option>
                      <option value="JO">Jordan</option>
                      <option value="KZ">Kazakhstan</option>
                      <option value="KE">Kenya</option>
                      <option value="KI">Kiribati</option>
                      <option value="KP">
                        Korea, Democratic People's Republic of
                      </option>
                      <option value="KR">Korea, Republic of</option>
                      <option value="XK">Kosovo</option>
                      <option value="KW">Kuwait</option>
                      <option value="KG">Kyrgyzstan</option>
                      <option value="LA">
                        Lao People's Democratic Republic
                      </option>
                      <option value="LV">Latvia</option>
                      <option value="LB">Lebanon</option>
                      <option value="LS">Lesotho</option>
                      <option value="LR">Liberia</option>
                      <option value="LY">Libyan Arab Jamahiriya</option>
                      <option value="LI">Liechtenstein</option>
                      <option value="LT">Lithuania</option>
                      <option value="LU">Luxembourg</option>
                      <option value="MO">Macao</option>
                      <option value="MK">
                        Macedonia, the Former Yugoslav Republic of
                      </option>
                      <option value="MG">Madagascar</option>
                      <option value="MW">Malawi</option>
                      <option value="MY">Malaysia</option>
                      <option value="MV">Maldives</option>
                      <option value="ML">Mali</option>
                      <option value="MT">Malta</option>
                      <option value="MH">Marshall Islands</option>
                      <option value="MQ">Martinique</option>
                      <option value="MR">Mauritania</option>
                      <option value="MU">Mauritius</option>
                      <option value="YT">Mayotte</option>
                      <option value="MX">Mexico</option>
                      <option value="FM">
                        Micronesia, Federated States of
                      </option>
                      <option value="MD">Moldova, Republic of</option>
                      <option value="MC">Monaco</option>
                      <option value="MN">Mongolia</option>
                      <option value="ME">Montenegro</option>
                      <option value="MS">Montserrat</option>
                      <option value="MA">Morocco</option>
                      <option value="MZ">Mozambique</option>
                      <option value="MM">Myanmar</option>
                      <option value="NA">Namibia</option>
                      <option value="NR">Nauru</option>
                      <option value="NP">Nepal</option>
                      <option value="NL">Netherlands</option>
                      <option value="AN">Netherlands Antilles</option>
                      <option value="NC">New Caledonia</option>
                      <option value="NZ">New Zealand</option>
                      <option value="NI">Nicaragua</option>
                      <option value="NE">Niger</option>
                      <option value="NG">Nigeria</option>
                      <option value="NU">Niue</option>
                      <option value="NF">Norfolk Island</option>
                      <option value="MP">Northern Mariana Islands</option>
                      <option value="NO">Norway</option>
                      <option value="OM">Oman</option>
                      <option value="PK">Pakistan</option>
                      <option value="PW">Palau</option>
                      <option value="PS">
                        Palestinian Territory, Occupied
                      </option>
                      <option value="PA">Panama</option>
                      <option value="PG">Papua New Guinea</option>
                      <option value="PY">Paraguay</option>
                      <option value="PE">Peru</option>
                      <option value="PH">Philippines</option>
                      <option value="PN">Pitcairn</option>
                      <option value="PL">Poland</option>
                      <option value="PT">Portugal</option>
                      <option value="PR">Puerto Rico</option>
                      <option value="QA">Qatar</option>
                      <option value="RE">Reunion</option>
                      <option value="RO">Romania</option>
                      <option value="RU">Russian Federation</option>
                      <option value="RW">Rwanda</option>
                      <option value="BL">Saint Barthelemy</option>
                      <option value="SH">Saint Helena</option>
                      <option value="KN">Saint Kitts and Nevis</option>
                      <option value="LC">Saint Lucia</option>
                      <option value="MF">Saint Martin</option>
                      <option value="PM">Saint Pierre and Miquelon</option>
                      <option value="VC">
                        Saint Vincent and the Grenadines
                      </option>
                      <option value="WS">Samoa</option>
                      <option value="SM">San Marino</option>
                      <option value="ST">Sao Tome and Principe</option>
                      <option value="SA">Saudi Arabia</option>
                      <option value="SN">Senegal</option>
                      <option value="RS">Serbia</option>
                      <option value="CS">Serbia and Montenegro</option>
                      <option value="SC">Seychelles</option>
                      <option value="SL">Sierra Leone</option>
                      <option value="SG">Singapore</option>
                      <option value="SX">Sint Maarten</option>
                      <option value="SK">Slovakia</option>
                      <option value="SI">Slovenia</option>
                      <option value="SB">Solomon Islands</option>
                      <option value="SO">Somalia</option>
                      <option value="ZA">South Africa</option>
                      <option value="GS">
                        South Georgia and the South Sandwich Islands
                      </option>
                      <option value="SS">South Sudan</option>
                      <option value="ES">Spain</option>
                      <option value="LK">Sri Lanka</option>
                      <option value="SD">Sudan</option>
                      <option value="SR">Suriname</option>
                      <option value="SJ">Svalbard and Jan Mayen</option>
                      <option value="SZ">Swaziland</option>
                      <option value="SE">Sweden</option>
                      <option value="CH">Switzerland</option>
                      <option value="SY">Syrian Arab Republic</option>
                      <option value="TW">Taiwan, Province of China</option>
                      <option value="TJ">Tajikistan</option>
                      <option value="TZ">Tanzania, United Republic of</option>
                      <option value="TH">Thailand</option>
                      <option value="TL">Timor-Leste</option>
                      <option value="TG">Togo</option>
                      <option value="TK">Tokelau</option>
                      <option value="TO">Tonga</option>
                      <option value="TT">Trinidad and Tobago</option>
                      <option value="TN">Tunisia</option>
                      <option value="TR">Turkey</option>
                      <option value="TM">Turkmenistan</option>
                      <option value="TC">Turks and Caicos Islands</option>
                      <option value="TV">Tuvalu</option>
                      <option value="UG">Uganda</option>
                      <option value="UA">Ukraine</option>
                      <option value="AE">United Arab Emirates</option>
                      <option value="GB">United Kingdom</option>
                      <option value="US">United States</option>
                      <option value="UM">
                        United States Minor Outlying Islands
                      </option>
                      <option value="UY">Uruguay</option>
                      <option value="UZ">Uzbekistan</option>
                      <option value="VU">Vanuatu</option>
                      <option value="VE">Venezuela</option>
                      <option value="VN">Viet Nam</option>
                      <option value="VG">Virgin Islands, British</option>
                      <option value="VI">Virgin Islands, U.s.</option>
                      <option value="WF">Wallis and Futuna</option>
                      <option value="EH">Western Sahara</option>
                      <option value="YE">Yemen</option>
                      <option value="ZM">Zambia</option>
                      <option value="ZW">Zimbabwe</option>
                    </select>
                  </div>
                  <div className="mt-4">
                    <label
                      for="state"
                      class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                    >
                      State
                    </label>
                    <input
                      type="text"
                      id="state"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                      required
                    />
                  </div>
                </div>
                <div className="md:6/12 lg:w-6/12 w-8/10 mx-auto">
                  <img
                    src={Pix1}
                    alt="Location pins illustration"
                    loading="lazy"
                    className="mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Home = () => {
    return (
      <div className="BG-lgreen ">
        <h1 className="text-2xl  sm:(text-5xl !leading-tight) pt-8 mx-4 font-medium capitalize lgreen">
          Your Individual Footprint ue to Transportation
        </h1>

        <p className="mt-6 sm:leading-relaxed px-2 sm:text-xl">
          This is calculated by dividing the total amount of energy used in the
          house by the number of people.
        </p>
        <div className="py-10  flex  flex-col  flex-wrapitems-center justify-center BG1">
          <div className="container flex items-center max-w-screen-xl m-auto py-10 md:py-20 md:px-15 text-gray-600  md:px-12 xl:px-22  BG-lgreen w-screen">
            <div className="space-y-6 md:space-y-0 md:flex justify-center m-auto md:gap-6 lg:items-center lg:gap-12 ">
              <div className="text-left md:6/12 lg:w-6/12 md:ml-12 mx-3">
                <h2 className="text-2xl lgreen font-bold md:text-4xl">
                  How many People are in your Household?
                </h2>
                <div className="mt-6 text-gray-600 leading-loose">
                  NOTE: If youre calculating for your full household, and the
                  data you input is estimated for everyone keep it at 1
                </div>
                <div className="mt-4 w-1/2">
                  {/* <label
                    for="state"
                    class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                  >
                    State
                  </label> */}
                  <input
                    type="number"
                    id="state"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    min="1"
                    max="10"
                    required
                  />
                </div>
              </div>
              <div className="md:6/12 lg:w-6/12 w-8/10 mx-auto">
                <img
                  src={Pix1}
                  alt="Location pins illustration"
                  loading="lazy"
                  className="mx-auto"
                />
              </div>
            </div>
          </div>
          {componentsArray.map((comp, i) => (
            <CompaniesList
              Pix={comp.Illustration}
              TextList={comp.TextList}
              Index={i}
            />
          ))}
        </div>
      </div>
    );
  };

  const Transport = () => {
    return (
      <div className="BG-lgreen ">
        <h1 className="text-2xl  sm:(text-5xl !leading-tight) pt-8 mx-4 font-medium capitalize lgreen">
          Your Individual Footprint due to Transportation
        </h1>

        <p className="mt-6 sm:leading-relaxed px-2 sm:text-xl px-4 sm:px-10">
          This is calculated by taking into account, all forms of
          transportation. Including Flight, Bus and Rails, Motorbike, Fuel
          Expenses and Freight.
        </p>
        <div className="py-10  flex  flex-col  flex-wrapitems-center justify-center BG1">
          <div className="container flex items-center max-w-screen-xl m-auto py-5 md:py-10 md:px-15 text-gray-600  md:px-12 xl:px-22 BG-lgreen  w-screen">
            <div className="space-y-6 md:space-y-0 md:flex justify-center m-auto md:gap-6 lg:items-center lg:gap-12 ">
              <div className="text-left md:6/12 lg:w-6/12 md:ml-12 mx-3">
                <h2 className="text-2xl lgreen font-bold md:text-4xl">
                  Flight
                </h2>
                <div className="mt-6 text-gray-600 leading-loose">
                  <div className="flex gap-4">
                    <div className="">
                      <label
                        for="state"
                        class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                      >
                        From
                      </label>
                      <input
                        type="text"
                        id="state"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder=""
                        required
                      />
                    </div>
                    <div className="">
                      <label
                        for="state"
                        class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                      >
                        To
                      </label>
                      <input
                        type="text"
                        id="state"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder=""
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap mt-5 text-center w-1/2">
                  <label
                    for="state"
                    class="block text-left pl-4 mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                  >
                    Class
                  </label>
                  <input
                    type="text"
                    id="state"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    required
                  />
                </div>
              </div>
              <div className="md:6/12 lg:w-6/12 w-8/10 mx-auto">
                <img
                  src={Pix3}
                  alt="Location pins illustration"
                  loading="lazy"
                  className="mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
        {flightsArray.map((comp, i) => (
          <CompaniesList
            Pix={comp.Illustration}
            TextList={comp.TextList}
            Index={i}
          />
        ))}
        {freightArray.map((comp, i) => (
          <FreightList
            Pix={comp.Illustration}
            TextList={comp.TextList}
            Index={i}
          />
        ))}
      </div>
    );
  };

  const Waste = () => {
    return (
      <>
        {wasteArray.map((comp, i) => (
          <CompaniesList
            Pix={comp.Illustration}
            TextList={comp.TextList}
            Index={i}
          />
        ))}
      </>
    );
  };

  const Cloth = () => {
    return (
      <>
        {wasteArray.map((comp, i) => (
          <CompaniesList
            Pix={comp.Illustration}
            TextList={comp.TextList}
            Index={i}
          />
        ))}
      </>
    );
  };

  const Sec = () => {
    return (
      <>
        {wasteArray.map((comp, i) => (
          <CompaniesList
            Pix={comp.Illustration}
            TextList={comp.TextList}
            Index={i}
          />
        ))}
      </>
    );
  };

  return (
    <div className="min-h-full">
      <Disclosure as="nav" className="shadow-md">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-center  lg:h-16">
                <div className="flex items-center">
                  <div className="block">
                    <div className="sm:ml-10 flex w-menu flex-col md:flex-row items-baseline space-x-20">
                      <div
                        onClick={() => {
                          setshowHome(false);
                          setshowWelcome(true);
                          setshowWaste(false);
                          setshowTransport(false);
                          setshowCloth(false);
                          setshowSec(false);
                        }}
                        className={classNames(
                          showWelcome
                            ? " lgreen border-bt"
                            : "darkgrey hover:lgreen ",
                          "px-3 py-3 flex items-center cursor-pointer"
                        )}
                        aria-current={showWelcome ? "page" : undefined}
                      >
                        <span
                          className={classNames(
                            showWelcome ? " lgreen" : "  text-gray-400",
                            "inline-flex items-center justify-center h-10 w-12"
                          )}
                        >
                          <i className={`bx bxs-building-house bx-sm`}></i>
                        </span>
                        <span className=" text-base font-medium">Welcome</span>
                      </div>
                      <div
                        onClick={() => {
                          setshowHome(true);
                          setshowWelcome(false);
                          setshowWaste(false);
                          setshowTransport(false);
                          setshowCloth(false);
                          setshowSec(false);
                        }}
                        className={classNames(
                          showHome
                            ? " lgreen border-bt"
                            : "darkgrey hover:lgreen ",
                          "px-3 !ml-0 sm:ml-75px py-3 flex items-center cursor-pointer"
                        )}
                        aria-current={showHome ? "page" : undefined}
                      >
                        <span
                          className={classNames(
                            showHome ? " lgreen" : "  text-gray-400",
                            "inline-flex items-center justify-center h-10 w-12"
                          )}
                        >
                          <i className={`bx bxs-user bx-sm`}></i>
                        </span>
                        <span className=" text-base font-medium">
                          Home Energy
                        </span>
                      </div>
                      <div
                        className={classNames(
                          showTransport
                            ? " lgreen border-bt"
                            : "darkgrey hover:lgreen ",
                          "px-3 !ml-0 sm:ml-75px py-3 flex items-center cursor-pointer"
                        )}
                        onClick={() => {
                          setshowHome(false);
                          setshowWelcome(false);
                          setshowWaste(false);
                          setshowTransport(true);
                          setshowCloth(false);
                          setshowSec(false);
                        }}
                        aria-current={showTransport ? "page" : undefined}
                      >
                        <span
                          className={classNames(
                            showTransport ? " lgreen" : "  text-gray-400",
                            "inline-flex items-center justify-center h-10 w-12"
                          )}
                        >
                          <i className={`bx bxs-building-house bx-sm`}></i>
                        </span>
                        <span className=" text-base font-medium">
                          Transportation Effects
                        </span>
                      </div>

                      <div
                        className={classNames(
                          showWaste
                            ? " lgreen border-bt"
                            : "darkgrey hover:lgreen ",
                          "px-3 !ml-0 sm:ml-75px py-3 flex items-center cursor-pointer"
                        )}
                        onClick={() => {
                          setshowHome(false);
                          setshowWelcome(false);
                          setshowWaste(true);
                          setshowTransport(false);
                          setshowCloth(false);
                          setshowSec(false);
                        }}
                        aria-current={showWaste ? "page" : undefined}
                      >
                        <span
                          className={classNames(
                            showWaste ? " lgreen" : "  text-gray-400",
                            "inline-flex items-center justify-center h-10 w-12"
                          )}
                        >
                          <i className={`bx bxs-user bx-sm`}></i>
                        </span>
                        <span className=" text-base font-medium">Waste</span>
                      </div>
                      <div
                        className={classNames(
                          showCloth
                            ? " lgreen border-bt"
                            : "darkgrey hover:lgreen ",
                          "px-3 !ml-0 sm:ml-75px py-3 flex items-center cursor-pointer"
                        )}
                        onClick={() => {
                          setshowHome(false);
                          setshowWelcome(false);
                          setshowWaste(false);
                          setshowTransport(false);
                          setshowCloth(true);
                          setshowSec(false);
                        }}
                        aria-current={showCloth ? "page" : undefined}
                      >
                        <span
                          className={classNames(
                            showCloth ? " lgreen" : "  text-gray-400",
                            "inline-flex items-center justify-center h-10 w-12"
                          )}
                        >
                          <i className={`bx bxs-user bx-sm`}></i>
                        </span>
                        <span className=" text-base font-medium">
                          Clothing and Footwear
                        </span>
                      </div>

                      <div
                        className={classNames(
                          showSec
                            ? " lgreen border-bt"
                            : "darkgrey hover:lgreen ",
                          "px-3 !ml-0 sm:ml-75px py-3 flex items-center cursor-pointer"
                        )}
                        onClick={() => {
                          setshowHome(false);
                          setshowWelcome(false);
                          setshowWaste(false);
                          setshowTransport(false);
                          setshowCloth(false);
                          setshowSec(true);
                        }}
                        aria-current={showSec ? "page" : undefined}
                      >
                        <span
                          className={classNames(
                            showSec ? " lgreen" : "  text-gray-400",
                            "inline-flex items-center justify-center h-10 w-12"
                          )}
                        >
                          <i className={`bx bxs-user bx-sm`}></i>
                        </span>
                        <span className=" text-base font-medium">
                          Secondary
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 
            <Disclosure.Panel className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel> */}
          </>
        )}
      </Disclosure>

      <header className="bg-white shadow"></header>
      <main>
        {showWelcome ? (
          <Welcome />
        ) : showHome ? (
          <Home />
        ) : showTransport ? (
          <Transport />
        ) : showWaste ? (
          <Waste />
        ) : showCloth ? (
          <Cloth />
        ) : showSec ? (
          <Sec />
        ) : (
          <Welcome />
        )}
      </main>
    </div>
  );
}

export default FootprintSection;
