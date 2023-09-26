import React from 'react'
import Alert from '../../components/shared/Alert'
import TitleHalfBorder from '../../components/shared/TitleHalfBorder'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Checkbox, Radio, RadioGroup, Stack } from '@chakra-ui/react'

type Props = {}

function Checkout({}: Props) {
    const [value, setValue] = React.useState('1')
  return (
   
        <div className="px-[18%] py-24 text-[#333e48]">
        <div className="text-center text-5xl mb-12 ">
                    <h1 className="text-center">Checkout</h1>
                </div>
                <Alert/>

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
                       
                      
                                <div className="bg-[#f1f1f1] h-fit rounded-lg">
                              
                                    <div className="p-6 py-8 mb-4 checkout-table">
                                      
                                        <div className="border-b mb-5 text-3xl font-thin">Your Order
                                            <TitleHalfBorder title=''/>  
                                            </div>
                                        

                                       
                                        <div className='divide-y divide-black/20 space-y-6'>
                                           
                                                <div className="flex flex-row justify-between items-center pt-4">
                                                    <div className='font-semibold text-lg'>Product</div>
                                                    <div className='font-semibold text-lg'>Total</div>
                                                </div>
                                            
                                           
                                            <div className="flex flex-row justify-between items-center space-x-8 pt-4">
                                                    <div>Ultra Wireless S50 Headphones S50 with Bluetooth&nbsp;<strong className="product-quantity">× 1</strong></div>
                                                    <div>$1,100.00</div>
                                                </div>
                                                
                                            <div className="flex flex-row justify-between items-center space-x-8 pt-4">
                                                    <div>Widescreen NX Mini F1 SMART NX&nbsp;<strong className="product-quantity">× 1</strong></div>
                                                    <div>$685.00</div>
                                                </div>
                                           
                                                <div className="flex flex-row justify-between items-center pt-4">
                                                <div className='font-semibold text-lg'>Subtotal</div>
                                                    <div>$1,785.00</div>
                                                </div>
                                                <div className="flex flex-row justify-between items-center pt-4">
                                                <div className='font-semibold text-lg'>Shipping</div>
                                                    <div>Flat rate <br /> $300.00</div>
                                                </div>
                                                <div className="flex flex-row justify-between items-center pt-4">
                                                <div className='font-semibold text-lg'>Total</div>
                                                    <div><strong>$2,085.00</strong></div>
                                                </div>
                                          
                                        </div>
                                        
                                        <div className=" border-t-4  border-black/20 my-6 pt-8">

                                        <RadioGroup onChange={setValue} value={value}>
                                            <Stack direction='column'>
                                                    <Accordion allowToggle className='divide-y space-y-4'>
                                                        <AccordionItem>
                                                            <h2>
                                                           
                                                            <AccordionButton className='flex flex-row justify-between font-bold'>
                                                                <Radio color={'gray.200'} colorScheme='yellow' value='1' > Direct bank transfer </Radio>  
                                                                                                                
                                                           <AccordionIcon/> 
                                                            </AccordionButton>
                                                            </h2>
                                                            <AccordionPanel className='bg-black/10 text-md text-black/70 ' p={8} >
                                                            Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                                                        
                                                            </AccordionPanel>
                                                        </AccordionItem>

                                                        <AccordionItem>
                                                            <h2>
                                                           
                                                            <AccordionButton className='flex flex-row justify-between font-bold'> <Radio color={'gray.200'} colorScheme='yellow' value='2'>Check payments</Radio>                                                      
                                                           <AccordionIcon/> 
                                                            </AccordionButton>
                                                            </h2>
                                                            <AccordionPanel className='bg-black/10 text-md text-black/70'  p={8}>
                                                            Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
                                                            </AccordionPanel>
                                                        </AccordionItem>
                                                        <AccordionItem>
                                                            <h2>
                                                           
                                                            <AccordionButton className='flex flex-row justify-between font-bold'><Radio color={'gray.200'} colorScheme='yellow'  value='3'> PayPal</Radio>                                                       
                                                           <AccordionIcon/> 
                                                            </AccordionButton>
                                                            </h2>
                                                            <AccordionPanel className='bg-black/10 text-md text-black/70'  p={8}>
                                                            Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.
                                                            </AccordionPanel>
                                                        </AccordionItem>
                                                        <AccordionItem>
                                                            <h2>
                                                           
                                                            <AccordionButton className='flex flex-row justify-between font-bold'><Radio color={'gray.200'} colorScheme='yellow' value='4'> M-Pesa</Radio>                                                       
                                                           <AccordionIcon/> 
                                                            </AccordionButton>
                                                            </h2>
                                                            <AccordionPanel className='bg-black/10 text-md text-black/70'  p={8}>
                                                            Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.
                                                            </AccordionPanel>
                                                        </AccordionItem>
                                                        </Accordion>   
                                            </Stack>
                                        </RadioGroup>
                                           
                                        </div>
                                        <div className="flex flex-row items-start space-x-2 px-3 mb-5">
                                           
                                                <Checkbox  className='border border-black/30' value={'checked'}></Checkbox>
                                                <label className="font-semibold" >
                                                    I have read and agree to the website <a href="#" className="text-blue-600">terms and conditions </a>
                                                    <span className="text-danger">*</span>
                                                </label>
                                           
                                        </div>
                                        <div className="pt-6">
                                                    < button type="button"className="hover:bg-[#333e48] bg-[#fed700] text-black text-center text-xl  md:px-4 rounded-full py-5 font-bold w-full mb-3  px-8 hover:text-white">Place Order
                                                </button></div>
                                    </div>
                                
                                </div>
                            
                     

                        
                    </div>
                </form>
            </div>

  )
}

export default Checkout