import React from 'react'
import Alert from '../../components/shared/Alert'
import TitleHalfBorder from '../../components/shared/TitleHalfBorder'

type Props = {}

function Checkout({}: Props) {
  return (
   
        <div className="px-[18%] py-24 text-[#333e48]">
        <div className="text-center text-5xl mb-12 ">
                    <h1 className="text-center">Checkout</h1>
                </div>

                <form className="js-validate" >
                    <div className="grid grid-cols-[60%,40%] gap-3">

                        
                        <div className="p-4 mb-7">
                               
                                <div className="border-b mb-5 text-3xl font-light">Billing details
                                    <TitleHalfBorder title=''/> 
                                </div>
                                

                               
                                <div className=" space-y-5">
                                    <div className="flex flex-row justify-between space-x-4">
                                        <div className="flex flex-col w-full space-y-2">
                                            <label className="font-bold capitalize">
                                                First name
                                                <span className="text-red-600">*</span>
                                            </label>
                                            <input type="text" className="py-3 px-3 border outline-blue-500 outline-[0.5px] w-full rounded-full" name="firstName" placeholder="Jack" aria-label="Jack"  data-msg="Please enter your frist name."  />
                                        </div>
                                        <div className="flex flex-col w-full space-y-2">
                                        <label className="font-bold capitalize">
                                                Last name
                                                <span className="text-red-600">*</span>
                                            </label>
                                            <input type="text" className="py-3 px-3 border outline-blue-500 outline-[0.5px] w-full rounded-full" name="lastName" placeholder="Wayley"  />
                                        </div>
                                    </div>

                                   

                                    <div className="col-md-12">
                                      
                                        <div className="flex flex-col w-full space-y-2">
                                            <label className="font-bold capitalize">
                                                Company name (optional)
                                            </label>
                                            <input type="text" className="py-3 px-3 border outline-blue-500 outline-[0.5px] w-full rounded-full" name="companyName" placeholder="Company Name" aria-label="Company Name" data-msg="Please enter a company name." />
                                        </div>
                                        
                                    </div>

                                    <div className="col-md-12">
                                      
                                        <div className="flex flex-col w-full space-y-2">
                                            <label className="font-bold capitalize">
                                                Country
                                                <span className="text-danger">*</span>
                                            </label>
                                            <div className="dropdown bootstrap-select form-control js-select dropdown-select">
                                                <select className="py-4 px-3 border outline-blue-500 outline-[0.5px] w-full rounded-full bg-white"  data-msg="Please select country."  data-live-search="true" data-style="form-control border-color-1 font-weight-normal" >
                                                <option value="">Select country</option>
                                                <option value="AF">Afghanistan</option>
                                                <option value="AX">Åland Islands</option>
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

                                            </select>
                                           </div>
                                        </div>
                                        
                                    </div>

                                    <div className="flex flex-row justify-between space-x-4">
                                      
                                        <div className="flex flex-col w-full space-y-2">
                                            <label className="font-bold capitalize">
                                                Street address
                                                <span className="text-danger">*</span>
                                            </label>
                                            <input type="text" className="py-3 px-3 border outline-blue-500 outline-[0.5px] w-full rounded-full" name="streetAddress" placeholder="470 Lucy Forks" aria-label="470 Lucy Forks"  />
                                        </div>
                                        <div className="flex flex-col w-full space-y-2">
                                            <label className="font-bold capitalize">
                                                Apt, suite, etc.
                                            </label>
                                            <input type="text" className="py-3 px-3 border outline-blue-500 outline-[0.5px] w-full rounded-full" placeholder="YC7B 3UT" aria-label="YC7B 3UT" />
                                        </div>
                                        
                                    </div>

                                    <div className="flex flex-row justify-between space-x-4">
                                      
                                        <div className="flex flex-col w-full space-y-2">
                                            <label className="font-bold capitalize">
                                                City
                                                <span className="text-danger">*</span>
                                            </label>
                                            <input type="text" className="py-3 px-3 border outline-blue-500 outline-[0.5px] w-full rounded-full" name="cityAddress" placeholder="London" aria-label="London"   />
                                        </div>
                                        <div className="flex flex-col w-full space-y-2">
                                            <label className="font-bold capitalize">
                                                Postcode/Zip
                                                <span className="text-danger">*</span>
                                            </label>
                                            <input type="text" className="py-3 px-3 border outline-blue-500 outline-[0.5px] w-full rounded-full" name="postcode" placeholder="99999" aria-label="99999"  data-msg="Please enter a postcode or zip code." />
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                      
                                        <div className="flex flex-col w-full space-y-2">
                                            <label className="font-bold capitalize">
                                                State
                                                <span className="text-danger">*</span>
                                            </label>
                                            <div className="dropdown bootstrap-select form-control js-select dropdown-select">
                                                <select className="py-4 px-3 border outline-blue-500 outline-[0.5px] w-full rounded-full bg-white" >
                                                <option value="">Select state</option>
                                               
                                                <option value="TR">Turkey</option>
                                                <option value="TM">Turkmenistan</option>
                                                <option value="TC">Turks and Caicos Islands</option>
                                                <option value="TV">Tuvalu</option>
                                                <option value="UG">Uganda</option>
                                                <option value="UA">Ukraine</option>
                                                <option value="AE">United Arab Emirates</option>
                                                <option value="GB">United Kingdom</option>
                                                <option value="US">United States</option>
                                                <option value="UM">United States Minor Outlying Islands</option>
                                                <option value="UY">Uruguay</option>
                                                <option value="UZ">Uzbekistan</option>
                                                <option value="VU">Vanuatu</option>
                                                <option value="VE">Venezuela, Bolivarian Republic of</option>
                                                <option value="VN">Viet Nam</option>
                                                <option value="VG">Virgin Islands, British</option>
                                                <option value="VI">Virgin Islands, U.S.</option>
                                                <option value="WF">Wallis and Futuna</option>
                                                <option value="EH">Western Sahara</option>
                                                <option value="YE">Yemen</option>
                                                <option value="ZM">Zambia</option>
                                                <option value="ZW">Zimbabwe</option>
                                            </select>
                                            </div>
                                        </div>
                                        
                                    </div>

                                    <div className="flex flex-row justify-between space-x-4">
                                      
                                        <div className="flex flex-col w-full space-y-2">
                                            <label className="font-bold capitalize">
                                                Email address
                                                <span className="text-danger">*</span>
                                            </label>
                                            <input type="email" className="py-3 px-3 border outline-blue-500 outline-[0.5px] w-full rounded-full" name="emailAddress" placeholder="jackwayley@gmail.com" aria-label="jackwayley@gmail.com"  data-msg="Please enter a valid email address." />
                                        </div>
                                        <div className="flex flex-col w-full space-y-2">
                                            <label className="font-bold capitalize">
                                                Phone
                                            </label>
                                            <input type="tel" className="py-3 px-3 border outline-blue-500 outline-[0.5px] w-full rounded-full" placeholder="+1 (062) 109-9222" aria-label="+1 (062) 109-9222" data-msg="Please enter your last name." />
                                        </div>
                                    </div>

                                    
                                </div>
                              
                                <div id="shopCartAccordion2" className="accordion rounded py-5 mb-6">
                                    
                                </div>
                             
                                <div className="border-bottom border-color-1 mb-5">
                                <div className="border-b mb-5 text-3xl font-thin">Added Infomation
                                    <TitleHalfBorder title=''/> 
                                </div>
                                   
                                </div>
                                <div className="flex flex-col w-full space-y-2">
                                    <label className="font-bold capitalize">
                                        Order notes (optional)
                                    </label>

                                    <div className="input-group">
                                        <textarea className="py-3 px-3 border outline-blue-500 outline-[0.5px] w-full rounded-2xl"  name="text" placeholder="Notes about your order, e.g. special notes for delivery." rows={5}></textarea>
                                    </div>
                                </div>
                                
                        </div>
                       
                        <div className="col-lg-5 order-lg-2 mb-7 mb-lg-0">
                            <div className="pl-lg-3 ">
                                <div className="bg-gray-1 rounded-lg">
                              
                                    <div className="p-4 mb-4 checkout-table">
                                      
                                        <div className="border-bottom border-color-1 mb-5">
                                            <h3 className="section-title mb-0 pb-2 font-size-25">Your order</h3>
                                        </div>
                                        

                                       
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th className="product-name">Product</th>
                                                    <th className="product-total">Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="cart_item">
                                                    <td>Ultra Wireless S50 Headphones S50 with Bluetooth&nbsp;<strong className="product-quantity">× 1</strong></td>
                                                    <td>$1,100.00</td>
                                                </tr>
                                                <tr className="cart_item">
                                                    <td>Widescreen NX Mini F1 SMART NX&nbsp;<strong className="product-quantity">× 1</strong></td>
                                                    <td>$685.00</td>
                                                </tr>
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th>Subtotal</th>
                                                    <td>$1,785.00</td>
                                                </tr>
                                                <tr>
                                                    <th>Shipping</th>
                                                    <td>Flat rate $300.00</td>
                                                </tr>
                                                <tr>
                                                    <th>Total</th>
                                                    <td><strong>$2,085.00</strong></td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                        
                                        <div className="border-top border-width-3 border-color-1 pt-3 mb-3">
                                            
                                            <div id="basicsAccordion1">
                                              
                                                <div className="border-bottom border-color-1 border-dotted-bottom">
                                                    <div className="p-3" id="basicsHeadingOne">
                                                        <div className="custom-control custom-radio">
                                                            <input type="radio" className="custom-control-input" id="stylishRadio1" name="stylishRadio" />
                                                            <label className="custom-control-label form-label"  data-toggle="collapse" data-target="#basicsCollapseOnee" aria-expanded="true" aria-controls="basicsCollapseOnee">
                                                                Direct bank transfer
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div id="basicsCollapseOnee" className="collapse show border-top border-color-1 border-dotted-top bg-dark-lighter" aria-labelledby="basicsHeadingOne" data-parent="#basicsAccordion1">
                                                        <div className="p-4">
                                                            Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                                                        </div>
                                                    </div>
                                                </div>
                                                

                                                <div className="border-bottom border-color-1 border-dotted-bottom">
                                                    <div className="p-3" id="basicsHeadingTwo">
                                                        <div className="custom-control custom-radio">
                                                            <input type="radio" className="custom-control-input" id="secondStylishRadio1" name="stylishRadio"/>
                                                            <label className="custom-control-label form-label"  data-toggle="collapse" data-target="#basicsCollapseTwo" aria-expanded="false" aria-controls="basicsCollapseTwo">
                                                                Check payments
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div id="basicsCollapseTwo" className="collapse border-top border-color-1 border-dotted-top bg-dark-lighter" aria-labelledby="basicsHeadingTwo" data-parent="#basicsAccordion1">
                                                        <div className="p-4">
                                                            Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
                                                        </div>
                                                    </div>
                                                </div>
                                                

                                                <div className="border-bottom border-color-1 border-dotted-bottom">
                                                    <div className="p-3" id="basicsHeadingFour">
                                                        <div className="custom-control custom-radio">
                                                            <input type="radio" className="custom-control-input" id="FourstylishRadio1" name="stylishRadio"/>
                                                            <label className="custom-control-label form-label"  data-toggle="collapse" data-target="#basicsCollapseFour" aria-expanded="false" aria-controls="basicsCollapseFour">
                                                                PayPal <a href="#" className="text-blue">What is PayPal?</a>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div id="basicsCollapseFour" className="collapse border-top border-color-1 border-dotted-top bg-dark-lighter" aria-labelledby="basicsHeadingFour" data-parent="#basicsAccordion1">
                                                        <div className="p-4">
                                                            Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                           
                                        </div>
                                        <div className="form-group d-flex align-items-center justify-content-between px-3 mb-5">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck10"  data-msg="Please agree terms and conditions." />
                                                <label className="form-check-label form-label" >
                                                    I have read and agree to the website <a href="#" className="text-blue">terms and conditions </a>
                                                    <span className="text-danger">*</span>
                                                </label>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary-dark-w btn-block btn-pill font-size-20 mb-3 py-3">Place order</button>
                                    </div>
                                
                                </div>
                            </div>
                        </div>

                        
                    </div>
                </form>
            </div>

  )
}

export default Checkout