import React from 'react'

type Props = {}

function Reviews({}: Props) {
  return (
    <div>
        {/* <div className="tab-pane fade" id="Jpills-four-example1" role="tabpanel" aria-labelledby="Jpills-four-example1-tab">
                                <div className="row mb-8">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <h3 className="font-size-18 mb-6">Based on 3 reviews</h3>
                                            <h2 className="font-size-30 font-weight-bold text-lh-1 mb-0">4.3</h2>
                                            <div className="text-lh-1">overall</div>
                                        </div>

                                        <!-- Ratings -->
                                        <ul className="list-unstyled">
                                            <li className="py-1">
                                                <a className="row align-items-center mx-gutters-2 font-size-1" href="javascript:;">
                                                    <div className="col-auto mb-2 mb-md-0">
                                                        <div className="text-warning text-ls-n2 font-size-16" >
                                                            <small className="fas fa-star"></small>
                                                            <small className="fas fa-star"></small>
                                                            <small className="fas fa-star"></small>
                                                            <small className="fas fa-star"></small>
                                                            <small className="far fa-star text-muted"></small>
                                                        </div>
                                                    </div>
                                                    <div className="col-auto mb-2 mb-md-0">
                                                        <div className="progress ml-xl-5" style="height: 10px; width: 200px;">
                                                            <div className="progress-bar" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                    <div className="col-auto text-right">
                                                        <span className="text-gray-90">205</span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="py-1">
                                                <a className="row align-items-center mx-gutters-2 font-size-1" href="javascript:;">
                                                    <div className="col-auto mb-2 mb-md-0">
                                                        <div className="text-warning text-ls-n2 font-size-16" >
                                                            <small className="fas fa-star"></small>
                                                            <small className="fas fa-star"></small>
                                                            <small className="fas fa-star"></small>
                                                            <small className="far fa-star text-muted"></small>
                                                            <small className="far fa-star text-muted"></small>
                                                        </div>
                                                    </div>
                                                    <div className="col-auto mb-2 mb-md-0">
                                                        <div className="progress ml-xl-5" style="height: 10px; width: 200px;">
                                                            <div className="progress-bar" role="progressbar" style="width: 53%;" aria-valuenow="53" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                    <div className="col-auto text-right">
                                                        <span className="text-gray-90">55</span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="py-1">
                                                <a className="row align-items-center mx-gutters-2 font-size-1" href="javascript:;">
                                                    <div className="col-auto mb-2 mb-md-0">
                                                        <div className="text-warning text-ls-n2 font-size-16" >
                                                            <small className="fas fa-star"></small>
                                                            <small className="fas fa-star"></small>
                                                            <small className="far fa-star text-muted"></small>
                                                            <small className="far fa-star text-muted"></small>
                                                            <small className="far fa-star text-muted"></small>
                                                        </div>
                                                    </div>
                                                    <div className="col-auto mb-2 mb-md-0">
                                                        <div className="progress ml-xl-5" style="height: 10px; width: 200px;">
                                                            <div className="progress-bar" role="progressbar" style="width: 20%;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                    <div className="col-auto text-right">
                                                        <span className="text-gray-90">23</span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="py-1">
                                                <a className="row align-items-center mx-gutters-2 font-size-1" href="javascript:;">
                                                    <div className="col-auto mb-2 mb-md-0">
                                                        <div className="text-warning text-ls-n2 font-size-16" >
                                                            <small className="fas fa-star"></small>
                                                            <small className="far fa-star text-muted"></small>
                                                            <small className="far fa-star text-muted"></small>
                                                            <small className="far fa-star text-muted"></small>
                                                            <small className="far fa-star text-muted"></small>
                                                        </div>
                                                    </div>
                                                    <div className="col-auto mb-2 mb-md-0">
                                                        <div className="progress ml-xl-5" style="height: 10px; width: 200px;">
                                                            <div className="progress-bar" role="progressbar" style="width: 0%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                    <div className="col-auto text-right">
                                                        <span className="text-muted">0</span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="py-1">
                                                <a className="row align-items-center mx-gutters-2 font-size-1" href="javascript:;">
                                                    <div className="col-auto mb-2 mb-md-0">
                                                        <div className="text-warning text-ls-n2 font-size-16" >
                                                            <small className="fas fa-star"></small>
                                                            <small className="far fa-star text-muted"></small>
                                                            <small className="far fa-star text-muted"></small>
                                                            <small className="far fa-star text-muted"></small>
                                                            <small className="far fa-star text-muted"></small>
                                                        </div>
                                                    </div>
                                                    <div className="col-auto mb-2 mb-md-0">
                                                        <div className="progress ml-xl-5" style="height: 10px; width: 200px;">
                                                            <div className="progress-bar" role="progressbar" style="width: 1%;" aria-valuenow="1" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                    <div className="col-auto text-right">
                                                        <span className="text-gray-90">4</span>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                        <!-- End Ratings -->
                                    </div>
                                    <div className="col-md-6">
                                        <h3 className="font-size-18 mb-5">Add a review</h3>
                                        <!-- Form -->
                                        <form className="js-validate" novalidate="novalidate">
                                            <div className="row align-items-center mb-4">
                                                <div className="col-md-4 col-lg-3">
                                                    <label for="rating" className="form-label mb-0">Your Review</label>
                                                </div>
                                                <div className="col-md-8 col-lg-9">
                                                    <a href="#" className="d-block">
                                                        <div className="text-warning text-ls-n2 font-size-16">
                                                            <small className="far fa-star text-muted"></small>
                                                            <small className="far fa-star text-muted"></small>
                                                            <small className="far fa-star text-muted"></small>
                                                            <small className="far fa-star text-muted"></small>
                                                            <small className="far fa-star text-muted"></small>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="js-form-message form-group mb-3 row">
                                                <div className="col-md-4 col-lg-3">
                                                    <label for="descriptionTextarea" className="form-label">Your Review</label>
                                                </div>
                                                <div className="col-md-8 col-lg-9">
                                                    <textarea className="form-control" rows="3" id="descriptionTextarea" data-msg="Please enter your message." data-error-className="u-has-error" data-success-className="u-has-success"></textarea>
                                                </div>
                                            </div>
                                            <div className="js-form-message form-group mb-3 row">
                                                <div className="col-md-4 col-lg-3">
                                                    <label for="inputName" className="form-label">Name <span className="text-danger">*</span></label>
                                                </div>
                                                <div className="col-md-8 col-lg-9">
                                                    <input type="text" className="form-control" name="name" id="inputName" aria-label="Alex Hecker" required="" data-msg="Please enter your name." data-error-className="u-has-error" data-success-className="u-has-success">
                                                </div>
                                            </div>
                                            <div className="js-form-message form-group mb-3 row">
                                                <div className="col-md-4 col-lg-3">
                                                    <label  className="form-label">Email <span className="text-danger">*</span></label>
                                                </div>
                                                <div className="col-md-8 col-lg-9">
                                                    <input type="email" className="form-control" name="emailAddress" id="emailAddress" aria-label="alexhecker@pixeel.com" required="" data-msg="Please enter a valid email address." data-error-className="u-has-error" data-success-className="u-has-success">
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="offset-md-4 offset-lg-3 col-auto">
                                                    <button type="submit" className="btn btn-primary-dark btn-wide transition-3d-hover">Add Review</button>
                                                </div>
                                            </div>
                                        </form>
                                     
                                    </div>
                                </div>
                                
                                <div className="border-bottom border-color-1 pb-4 mb-4">
                                   
                                    <div className="d-flex justify-content-between align-items-center text-secondary font-size-1 mb-2">
                                        <div className="text-warning text-ls-n2 font-size-16" >
                                            <small className="fas fa-star"></small>
                                            <small className="fas fa-star"></small>
                                            <small className="fas fa-star"></small>
                                            <small className="far fa-star text-muted"></small>
                                            <small className="far fa-star text-muted"></small>
                                        </div>
                                    </div>
                                    

                                    <p className="text-gray-90">Fusce vitae nibh mi. Integer posuere, libero et ullamcorper facilisis, enim eros tincidunt orci, eget vestibulum sapien nisi ut leo. Cras finibus vel est ut mollis. Donec luctus condimentum ante et euismod.</p>

                                    
                                    <div className="mb-2">
                                        <strong>John Doe</strong>
                                        <span className="font-size-13 text-gray-23">- April 3, 2019</span>
                                    </div>
                                  
                                </div>
                                
                                
                                <div className="border-bottom border-color-1 pb-4 mb-4">
                                   
                                    <div className="d-flex justify-content-between align-items-center text-secondary font-size-1 mb-2">
                                        <div className="text-warning text-ls-n2 font-size-16" >
                                            <small className="fas fa-star"></small>
                                            <small className="fas fa-star"></small>
                                            <small className="fas fa-star"></small>
                                            <small className="fas fa-star"></small>
                                            <small className="fas fa-star"></small>
                                        </div>
                                    </div>
                                    

                                    <p className="text-gray-90">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse eget facilisis odio. Duis sodales augue eu tincidunt faucibus. Etiam justo ligula, placerat ac augue id, volutpat porta dui.</p>

                                    
                                    <div className="mb-2">
                                        <strong>Anna Kowalsky</strong>
                                        <span className="font-size-13 text-gray-23">- April 3, 2019</span>
                                    </div>
                                  
                                </div>
                                
                                
                                <div className="pb-4">
                                    
                                    <div className="d-flex justify-content-between align-items-center text-secondary font-size-1 mb-2">
                                        <div className="text-warning text-ls-n2 font-size-16" >
                                            <small className="fas fa-star"></small>
                                            <small className="fas fa-star"></small>
                                            <small className="fas fa-star"></small>
                                            <small className="fas fa-star"></small>
                                            <small className="far fa-star text-muted"></small>
                                        </div>
                                    </div>
                                    

                                    <p className="text-gray-90">Sed id tincidunt sapien. Pellentesque cursus accumsan tellus, nec ultricies nulla sollicitudin eget. Donec feugiat orci vestibulum porttitor sagittis.</p>

                                    
                                    <div className="mb-2">
                                        <strong>Peter Wargner</strong>
                                        <span className="font-size-13 text-gray-23">- April 3, 2019</span>
                                    </div>
                                  
                                </div>
                                
                            </div> */}
    </div>
  )
}

export default Reviews