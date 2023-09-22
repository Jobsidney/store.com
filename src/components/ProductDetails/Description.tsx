import React from 'react'

type Props = {}

function Description({}: Props) {
  return (
    <div>
        <div className="borders-radius-17  p-4 mt-4 mt-md-0 px-lg-10 py-lg-9">
                        <div className="tab-content" id="Jpills-tabContent">
                           
                            <div className="tab-pane fade active show" id="Jpills-two-example1" role="tabpanel" aria-labelledby="Jpills-two-example1-tab">
                                <h3 className="text-3xl text-black/70 mb-4">Perfectly Done</h3>
                                <p>Praesent ornare, ex a interdum consectetur, lectus diam sodales elit, vitae egestas est enim ornare nisl. Nullam in lectus nec sem semper viverra. In lobortis egestas massa. Nam nec massa nisi. Suspendisse potenti. Quisque suscipit vulputate dui quis volutpat. Ut id elit facilisis, feugiat est in, tempus lacus. Ut ultrices dictum metus, a ultricies ex vulputate ac. Ut id cursus tellus, non tempor quam. Morbi porta diam nisi, id finibus nunc tincidunt eu.</p>
                                <div className="">
                                    <div className='grid grid-cols-2 gap-24 '>
                                       
                                            <div className="flex flex-col justify-center">
                                                <h3 className="text-3xl text-black/70 mb-4">Wireless</h3>
                                                <p className="mb-6">Fusce vitae nibh mi. Integer posuere, libero et ullamcorper facilisis, enim eros tincidunt orci, eget vestibulum sapien nisi ut leo. Cras finibus vel est ut mollis. Donec luctus condimentum ante et euismod.</p>
                                                <h3 className="text-3xl text-black/70 mb-4">Fresh Design</h3>
                                                <p className="mb-6">Integer bibendum aliquet ipsum, in ultrices enim sodales sed. Quisque ut urna vitae lacus laoreet malesuada eu at massa. Pellentesque nibh augue, pellentesque nec dictum vel, pretium a arcu. Duis eu urna suscipit, lobortis elit quis, ullamcorper massa.</p>
                                                <h3 className="text-3xl text-black/70 mb-4">Fabolous Sound</h3>
                                                <p className="mb-6">Cras rutrum, nibh a sodales accumsan, elit sapien ultrices sapien, eget semper lectus ex congue elit. Nullam dui elit, fermentum a varius at, iaculis non dolor. In hac habitasse platea dictumst.</p>
                                            </div>
                                       
                                        <div className="col-md-6 text-right bg-red-900">
                                            <img className="w-[80rem]" src="https://transvelo.github.io/electro-html/2.0/assets/img/580X580/img1.jpg" alt="Image Description"/>
                                        </div>
                                    </div>

                                    <div className='grid grid-cols-2 gap-24 justify-between'>
                                        <div className="">
                                            <img className="w-[80rem]" src="https://transvelo.github.io/electro-html/2.0/assets/img/580X580/img2.jpg" alt="Image Description"/>
                                        </div>
                                        
                                        <div className="flex flex-col justify-center">
                                                <h3 className="text-3xl text-black/70 mb-4">Inteligent Bass</h3>
                                                <p className="mb-6">Fusce vitae nibh mi. Integer posuere, libero et ullamcorper facilisis, enim eros tincidunt orci, eget vestibulum sapien nisi ut leo. Cras finibus vel est ut mollis. Donec luctus condimentum ante et euismod.</p>
                                                <h3 className="text-3xl text-black/70 mb-4">Battery Life</h3>
                                                <p className="mb-6">Integer bibendum aliquet ipsum, in ultrices enim sodales sed. Quisque ut urna vitae lacus laoreet malesuada eu at massa. Pellentesque nibh augue, pellentesque nec dictum vel, pretium a arcu. Duis eu urna suscipit, lobortis elit quis, ullamcorper massa.</p>
                                            </div>
                                        
                                    </div>
                                </div>
                                <ul className="flex flex-row">
                                    <li className="nav-item text-gray-111 flex-shrink-0 flex-xl-shrink-1"><strong>SKU:</strong> <span className="sku">FW511948218</span></li>
                                    <li className="nav-item text-gray-111 mx-3 flex-shrink-0 flex-xl-shrink-1">/</li>
                                    <li className="nav-item text-gray-111 flex-shrink-0 flex-xl-shrink-1"><strong>Category:</strong> Headphones</li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
    </div>
  )
}

export default Description