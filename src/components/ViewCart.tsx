import React from 'react'
import * as Bi from 'react-icons/bi'
import TitleHalfBorder from './shared/TitleHalfBorder'
type Props = {}

function ViewCart({}: Props) {
  return (
    <div className="px-[18%] py-24 text-[#333e48]">
                <div className="text-center text-5xl mb-12 ">
                    <h1 className="text-center">Cart</h1>
                </div>
                <div className="mb-10 cart-table">
                    <form className="mb-4" action="#" method="post">
                        <table className="text-[#747474] " >
                            <thead className='border-b   text-[#747474]/80'>
                                <tr className='font-extralight my-3'>
                                    <th className="product-remove">&nbsp;</th>
                                    <th className="product-thumbnail">&nbsp;</th>
                                    <th className="product-name">Product</th>
                                    <th className="product-price">Price</th>
                                    <th className="product-quantity w-lg-15">Quantity</th>
                                    <th className="product-subtotal">Total</th>
                                </tr>
                            </thead>
                            <tbody className='border-spacing-4 '>
                                <tr className="space-x-4 text-black/80  text-lg " style={{paddingTop: "10px"}}>
                                    <td className="text-right px-4 w-[20px] text-3xl mt-4 ">
                                        <a href="#" className=" text-[#333e48]/60  hover:text-black font-size-26">×</a>
                                    </td>
                                    <td className="px-2 mt-4">
                                        <div className='w-[100px]  border-2 border-black/20'>
                                            <a href="#" >
                                                <img className="" src="https://transvelo.github.io/electro-html/2.0/assets/img/300X300/img6.jpg" alt="Image Description"/></a>
                                        </div>
                                    </td>

                                    <td data-title="Product" className="px-14">
                                        <a href="#" className="text-black/80 font-medium text-lg">Ultra Wireless S50 Headphones S50 with Bluetooth</a>
                                    </td>

                                    <td data-title="Price" className="px-14  text-[#333e48]">
                                        <span className="">$1,100.00</span>
                                    </td>

                                    <td  className="px-14">
                                        
                                    
                                        <div className="border rounded-full py-1 w-[170px] px-3  text-[#333e48]">
                                            <div className="justify-between items-center flex flex-row">
                                                
                                                    <input className=" outline-none w-full"  type="number" />
                                                
                                                <div className="flex flex-row space-x-1">
                                                    <div className="rounded-full hover:bg-[#333e48] hover:text-white p-2 cursor-pointer" >
                                                        <Bi.BiMinus size={16}/>
                                                    </div>
                                                    <div className="rounded-full hover:bg-[#333e48] hover:text-white p-2 cursor-pointer" >
                                                        <Bi.BiPlus size={16}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                      
                                    </td>

                                    <td  className="px-14">
                                        <span className="">$1,100.00</span>
                                    </td>
                                </tr>
                                {/* end of table row for itesm in cart */}
                                <tr className="space-x-4 text-black/80  text-lg " style={{paddingTop: "10px"}}>
                                    <td className="text-right px-4 w-[20px] text-3xl mt-4 ">
                                        <a href="#" className=" text-[#333e48]/60  hover:text-black font-size-26">×</a>
                                    </td>
                                    <td className="px-2 mt-4">
                                        <div className='w-[100px]  border-2 border-black/20'>
                                            <a href="#" >
                                                <img className="" src="https://transvelo.github.io/electro-html/2.0/assets/img/300X300/img6.jpg" alt="Image Description"/></a>
                                        </div>
                                    </td>

                                    <td data-title="Product" className="px-14">
                                        <a href="#" className="text-black/80 font-medium text-lg">Ultra Wireless S50 Headphones S50 with Bluetooth</a>
                                    </td>

                                    <td data-title="Price" className="px-14  text-[#333e48]">
                                        <span className="">$1,100.00</span>
                                    </td>

                                    <td  className="px-14">
                                        
                                    
                                        <div className="border rounded-full py-1 w-[170px] px-3  text-[#333e48]">
                                            <div className="justify-between items-center flex flex-row">
                                                
                                                    <input className=" outline-none w-full"  type="number" />
                                                
                                                <div className="flex flex-row space-x-1">
                                                    <div className="rounded-full hover:bg-[#333e48] hover:text-white p-2 cursor-pointer" >
                                                        <Bi.BiMinus size={16}/>
                                                    </div>
                                                    <div className="rounded-full hover:bg-[#333e48] hover:text-white p-2 cursor-pointer" >
                                                        <Bi.BiPlus size={16}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                      
                                    </td>

                                    <td  className="px-14">
                                        <span className="">$1,100.00</span>
                                    </td>
                                </tr>
                                {/* end of table row for itesm in cart */}
                                
                            </tbody>
                        </table>
                        <div className="mt-10">
                                            <div className="flex flex-row items-center justify-between">
                                             
                                                        <div className="flex flex-row ">
                                                            <input type="text" className="border outline-none  rounded-l-full px-4 lg:min-w-[350px]" name="text" placeholder="Coupon code" />
                                                            
                                                                <button className="bg-[#333e48]  text-center  md:px-4 rounded-r-full py-3 font-bold min-w-[200px]  px-8 text-white" type="button" >
                                                                     Apply coupon</button>
                                                            
                                                        </div>
                                                <div className="flex flex-row space-x-3">
                                                    <button type="button" className=" bg-[#77838f]/10 hover:bg-[#77838f] hover:text-white rounded-full text-base mb-3 font-normal px-8 w-[150px] py-3 ">Update cart</button>
                                                    <a href="../shop/checkout.html" className="hover:bg-[#333e48] bg-[#fed700] text-black text-center  md:px-4 rounded-full py-3 font-bold min-w-[200px] mb-3  px-8 hover:text-white">Proceed to checkout</a>
                                                </div>
                                            </div>
                                        </div>
                    
                </form>
                </div>
                <div className="mb-8 cart-total">
                    <div className="flex flex-row justify-end">
                        <div className="w-[40%] space-y-6">
                            <div className="border-b mb-3">
                                <TitleHalfBorder title='Cart Totals'/>
                            </div>
                            
                               <div className='divide-y space-y-6'>
                               <div className="flex flex-row justify-between items-center pt-4">
                                        <div className='font-semibold text-lg'>Subtotal</div>
                                        <div data-title="Subtotal"><span className="amount">$1,785.00</span></div>
                                    </div>
                                    <div className="flex flex-row justify-between items-center pt-4">
                                        <div className='font-semibold text-lg'>Shipping</div>
                                        <div data-title="Shipping">
                                            Flat Rate: <span className="amount">$300.00</span>
                                            {/* <div className="mt-1">
                                                <a className="font-size-12 text-gray-90 text-decoration-on underline-on-hover font-weight-bold mb-3 d-inline-block" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                                    Calculate Shipping
                                                </a>
                                                <div className="collapse mb-3" id="collapseExample">
                                                    <div className="form-group mb-4">
                                                        <div className="dropdown bootstrap-select js-select dropdown-select right-dropdown-0-all w-100"><select className="js-select selectpicker dropdown-select right-dropdown-0-all w-100" data-style="bg-white font-weight-normal border border-color-1 text-gray-20" tabindex="-98">
                                                            <option value="">Select a country…</option>
                                                            <option value="AX">Åland Islands</option>
                                                            <option value="AF">Afghanistan</option>
                                                            <option value="AL">Albania</option>
                                                            <option value="DZ">Algeria</option>
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
                                                            <option value="PW">Belau</option>
                                                            <option value="BE">Belgium</option>
                                                            <option value="BZ">Belize</option>
                                                            <option value="BJ">Benin</option>
                                                            <option value="BM">Bermuda</option>
                                                            <option value="BT">Bhutan</option>
                                                            <option value="BO">Bolivia</option>
                                                            <option value="BQ">Bonaire, Saint Eustatius and Saba</option>
                                                            <option value="BA">Bosnia and Herzegovina</option>
                                                            <option value="BW">Botswana</option>
                                                            <option value="BV">Bouvet Island</option>
                                                            <option value="BR">Brazil</option>
                                                            <option value="IO">British Indian Ocean Territory</option>
                                                            <option value="VG">British Virgin Islands</option>
                                                            <option value="BN">Brunei</option>
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
                                                            <option value="CG">Congo (Brazzaville)</option>
                                                            <option value="CD">Congo (Kinshasa)</option>
                                                            <option value="CK">Cook Islands</option>
                                                            <option value="CR">Costa Rica</option>
                                                            <option value="HR">Croatia</option>
                                                            <option value="CU">Cuba</option>
                                                            <option value="CW">CuraÇao</option>
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
                                                            <option value="FK">Falkland Islands</option>
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
                                                            <option value="GT">Guatemala</option>
                                                            <option value="GG">Guernsey</option>
                                                            <option value="GN">Guinea</option>
                                                            <option value="GW">Guinea-Bissau</option>
                                                            <option value="GY">Guyana</option>
                                                            <option value="HT">Haiti</option>
                                                            <option value="HM">Heard Island and McDonald Islands</option>
                                                            <option value="HN">Honduras</option>
                                                            <option value="HK">Hong Kong</option>
                                                            <option value="HU">Hungary</option>
                                                            <option value="IS">Iceland</option>
                                                            <option value="IN">India</option>
                                                            <option value="ID">Indonesia</option>
                                                            <option value="IR">Iran</option>
                                                            <option value="IQ">Iraq</option>
                                                            <option value="IM">Isle of Man</option>
                                                            <option value="IL">Israel</option>
                                                            <option value="IT">Italy</option>
                                                            <option value="CI">Ivory Coast</option>
                                                            <option value="JM">Jamaica</option>
                                                            <option value="JP">Japan</option>
                                                            <option value="JE">Jersey</option>
                                                            <option value="JO">Jordan</option>
                                                            <option value="KZ">Kazakhstan</option>
                                                            <option value="KE">Kenya</option>
                                                            <option value="KI">Kiribati</option>
                                                            <option value="KW">Kuwait</option>
                                                            <option value="KG">Kyrgyzstan</option>
                                                            <option value="LA">Laos</option>
                                                            <option value="LV">Latvia</option>
                                                            <option value="LB">Lebanon</option>
                                                            <option value="LS">Lesotho</option>
                                                            <option value="LR">Liberia</option>
                                                            <option value="LY">Libya</option>
                                                            <option value="LI">Liechtenstein</option>
                                                            <option value="LT">Lithuania</option>
                                                            <option value="LU">Luxembourg</option>
                                                            <option value="MO">Macao S.A.R., China</option>
                                                            <option value="MK">Macedonia</option>
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
                                                            <option value="FM">Micronesia</option>
                                                            <option value="MD">Moldova</option>
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
                                                            <option value="KP">North Korea</option>
                                                            <option value="NO">Norway</option>
                                                            <option value="OM">Oman</option>
                                                            <option value="PK">Pakistan</option>
                                                            <option value="PS">Palestinian Territory</option>
                                                            <option value="PA">Panama</option>
                                                            <option value="PG">Papua New Guinea</option>
                                                            <option value="PY">Paraguay</option>
                                                            <option value="PE">Peru</option>
                                                            <option value="PH">Philippines</option>
                                                            <option value="PN">Pitcairn</option>
                                                            <option value="PL">Poland</option>
                                                            <option value="PT">Portugal</option>
                                                            <option value="QA">Qatar</option>
                                                            <option value="IE">Republic of Ireland</option>
                                                            <option value="RE">Reunion</option>
                                                            <option value="RO">Romania</option>
                                                            <option value="RU">Russia</option>
                                                            <option value="RW">Rwanda</option>
                                                            <option value="ST">São Tomé and Príncipe</option>
                                                            <option value="BL">Saint Barthélemy</option>
                                                            <option value="SH">Saint Helena</option>
                                                            <option value="KN">Saint Kitts and Nevis</option>
                                                            <option value="LC">Saint Lucia</option>
                                                            <option value="SX">Saint Martin (Dutch part)</option>
                                                            <option value="MF">Saint Martin (French part)</option>
                                                            <option value="PM">Saint Pierre and Miquelon</option>
                                                            <option value="VC">Saint Vincent and the Grenadines</option>
                                                            <option value="SM">San Marino</option>
                                                            <option value="SA">Saudi Arabia</option>
                                                            <option value="SN">Senegal</option>
                                                            <option value="RS">Serbia</option>
                                                            <option value="SC">Seychelles</option>
                                                            <option value="SL">Sierra Leone</option>
                                                            <option value="SG">Singapore</option>
                                                            <option value="SK">Slovakia</option>
                                                            <option value="SI">Slovenia</option>
                                                            <option value="SB">Solomon Islands</option>
                                                            <option value="SO">Somalia</option>
                                                            <option value="ZA">South Africa</option>
                                                            <option value="GS">South Georgia/Sandwich Islands</option>
                                                            <option value="KR">South Korea</option>
                                                            <option value="SS">South Sudan</option>
                                                            <option value="ES">Spain</option>
                                                            <option value="LK">Sri Lanka</option>
                                                            <option value="SD">Sudan</option>
                                                            <option value="SR">Suriname</option>
                                                            <option value="SJ">Svalbard and Jan Mayen</option>
                                                            <option value="SZ">Swaziland</option>
                                                            <option value="SE">Sweden</option>
                                                            <option value="CH">Switzerland</option>
                                                            <option value="SY">Syria</option>
                                                            <option value="TW">Taiwan</option>
                                                            <option value="TJ">Tajikistan</option>
                                                            <option value="TZ">Tanzania</option>
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
                                                            <option value="GB">United Kingdom (UK)</option>
                                                            <option value="US">United States (US)</option>
                                                            <option value="UY">Uruguay</option>
                                                            <option value="UZ">Uzbekistan</option>
                                                            <option value="VU">Vanuatu</option>
                                                            <option value="VA">Vatican</option>
                                                            <option value="VE">Venezuela</option>
                                                            <option value="VN">Vietnam</option>
                                                            <option value="WF">Wallis and Futuna</option>
                                                            <option value="EH">Western Sahara</option>
                                                            <option value="WS">Western Samoa</option>
                                                            <option value="YE">Yemen</option>
                                                            <option value="ZM">Zambia</option>
                                                            <option value="ZW">Zimbabwe</option>
                                                        </select><button type="button" className="btn dropdown-toggle bs-placeholder bg-white font-weight-normal border border-color-1 text-gray-20" data-toggle="dropdown" role="button" title="Select a country…"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">Select a country…</div></div> </div></button><div className="dropdown-menu " role="combobox"><div className="inner show" role="listbox" aria-expanded="false" tabindex="-1"><ul className="dropdown-menu inner show"></ul></div></div></div>
                                                    </div>
                                                    <div className="form-group mb-4">
                                                        <div className="dropdown bootstrap-select js-select dropdown-select right-dropdown-0-all w-100"><select className="js-select selectpicker dropdown-select right-dropdown-0-all w-100" data-style="bg-white font-weight-normal border border-color-1 text-gray-20" tabindex="-98">
                                                            <option value="">Select an option…</option>
                                                            <option value="AP">Andhra Pradesh</option>
                                                            <option value="AR">Arunachal Pradesh</option>
                                                            <option value="AS">Assam</option>
                                                            <option value="BR">Bihar</option>
                                                            <option value="CT">Chhattisgarh</option>
                                                            <option value="GA">Goa</option>
                                                            <option value="GJ">Gujarat</option>
                                                            <option value="HR">Haryana</option>
                                                            <option value="HP">Himachal Pradesh</option>
                                                            <option value="JK">Jammu and Kashmir</option>
                                                            <option value="JH">Jharkhand</option>
                                                            <option value="KA">Karnataka</option>
                                                            <option value="KL">Kerala</option>
                                                            <option value="MP">Madhya Pradesh</option>
                                                            <option value="MH">Maharashtra</option>
                                                            <option value="MN">Manipur</option>
                                                            <option value="ML">Meghalaya</option>
                                                            <option value="MZ">Mizoram</option>
                                                            <option value="NL">Nagaland</option>
                                                            <option value="OR">Orissa</option>
                                                            <option value="PB">Punjab</option>
                                                            <option value="RJ">Rajasthan</option>
                                                            <option value="SK">Sikkim</option>
                                                            <option value="TN">Tamil Nadu</option>
                                                            <option value="TS">Telangana</option>
                                                            <option value="TR">Tripura</option>
                                                            <option value="UK">Uttarakhand</option>
                                                            <option value="UP">Uttar Pradesh</option>
                                                            <option value="WB">West Bengal</option>
                                                            <option value="AN">Andaman and Nicobar Islands</option>
                                                            <option value="CH">Chandigarh</option>
                                                            <option value="DN">Dadar and Nagar Haveli</option>
                                                            <option value="DD">Daman and Diu</option>
                                                            <option value="DL">Delhi</option>
                                                            <option value="LD">Lakshadeep</option>
                                                            <option value="PY">Pondicherry (Puducherry)</option>
                                                        </select><button type="button" className="btn dropdown-toggle bs-placeholder bg-white font-weight-normal border border-color-1 text-gray-20" data-toggle="dropdown" role="button" title="Select an option…"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">Select an option…</div></div> </div></button><div className="dropdown-menu " role="combobox"><div className="inner show" role="listbox" aria-expanded="false" tabindex="-1"><ul className="dropdown-menu inner show"></ul></div></div></div>
                                                    </div>
                                                    <input className="form-control mb-4" type="text" placeholder="Postcode / ZIP">
                                                    <button type="button" className="btn btn-soft-secondary mb-3 mb-md-0 font-weight-normal px-5 px-md-4 px-lg-5 w-100 w-md-auto">Update Totals</button>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-between items-center pt-4">
                                    <div className='font-semibold text-lg'>Total</div>
                                        <div data-title="Total"><strong><span className="amount">$2,085.00</span></strong></div>
                                    </div>
                               </div>
                            
                            
                            {/* <a href="../shop/checkout.html" className="hover:bg-[#333e48] bg-[#fed700] text-black text-center  md:px-4 rounded-full py-3 font-bold min-w-[200px] mb-3  px-8 hover:text-white">Proceed to checkout</a> */}
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default ViewCart