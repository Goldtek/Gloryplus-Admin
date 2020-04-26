import React,{Fragment} from 'react'

function WelcomeForm() {
    return (
        <section className="content">
        <div className="container-fluid">
            <div className="block-header">
                <h2>GORY PLUS DASHBOARD</h2>
            </div>


            <div className="row clearfix">
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                    <div className="info-box bg-cyan hover-expand-effect">
                        <div className="icon">
                            <i className="material-icons">help</i>
                        </div>
                        <div className="content">
                            <div className="text">NEW TICKETS</div>
                            <div className="number count-to" data-from="0" data-to="257" data-speed="1000"
                                data-fresh-interval="20"></div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                    <div className="info-box bg-light-green hover-expand-effect">
                        <div className="icon">
                            <i className="material-icons">forum</i>
                        </div>
                        <div className="content">
                            <div className="text">NEW COMMENTS</div>
                            <div className="number count-to" data-from="0" data-to="243" data-speed="1000"
                                data-fresh-interval="20"></div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                    <div className="info-box bg-orange hover-expand-effect">
                        <div className="icon">
                            <i className="material-icons">person_add</i>
                        </div>
                        <div className="content">
                            <div className="text">NEW VISITORS</div>
                            <div className="number count-to" data-from="0" data-to="1225" data-speed="1000"
                                data-fresh-interval="20"></div>
                        </div>
                    </div>
                </div>
            </div>

         
                <div className="col-md-12 col-lg-12 col-sm-12 col-x-12">
                    <section className="site-container padding-tb welcomeform">

                        <section className="card wow fadeInLeft">

                            <h3 className="wow fadeInDown" data-wow-delay="0.4s">Please fill in your details correctly</h3>

                            <form action="#" className="form" >

                                <div className="row">
                                    {/* FIRST NAME ######################## */}
                                    <div className="col-xs-6">
                                        <div
                                            className="form__wrapper wow fadeInDown"
                                            data-wow-delay="0.5s"
                                        >
                                            <input
                                                type="text"
                                                className="form__input"
                                                id="fname"
                                                name="fname"
                                                required
                                            />
                                            <label className="form__label" htmlFor="first name">
                                                <span className="form__label-content">First Name</span>
                                            </label>
                                        </div>
                                    </div>
                                    {/* LAST NAME */}
                                    <div className="col-xs-6">
                                        <div
                                            className="form__wrapper wow fadeInDown"
                                            data-wow-delay="0.5s"
                                        >
                                            <input
                                                type="text"
                                                className="form__input"
                                                id="lname"
                                                name="lname"
                                                required
                                            />
                                            <label className="form__label" htmlFor="first name">
                                                <span className="form__label-content">Last Name</span>
                                            </label>
                                        </div>
                                    </div>

                                    {/* EMAIL */}
                                    <div className="col-xs-6">
                                        <div
                                            className="form__wrapper wow fadeInDown"
                                            data-wow-delay="0.5s"
                                        >
                                            <input
                                                type="email"
                                                className="form__input"
                                                id="email"
                                                name="email"
                                                required
                                            />
                                            <label className="form__label" htmlFor="first name">
                                                <span className="form__label-content">Email</span>
                                            </label>
                                        </div>
                                    </div>

                                    {/* GENDER */}
                                    <div className="col-xs-6">
                                        <div
                                            className="form__wrapper wow fadeInDown"
                                            data-wow-delay="0.5s"
                                        >

                                            <select className="form__input"
                                                id="gender" name="gender">
                                                <option value=""></option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                            </select>
                                            <label className="form__label" htmlFor="first name">
                                                <span className="form__label-content">Gender</span>
                                            </label>
                                        </div>
                                    </div>



                                    {/* CONTACT NUMBER */}
                                    <div className="col-xs-6">
                                        <div
                                            className="form__wrapper wow fadeInDown"
                                            data-wow-delay="0.5s"
                                        >
                                            <input
                                                type="text"
                                                className="form__input"
                                                id="phone"
                                                name="phone"
                                                required
                                            />
                                            <label className="form__label" htmlFor="first name">
                                                <span className="form__label-content">Whatsapp phone Number</span>
                                            </label>
                                        </div>
                                    </div>
                                    {/* OTHER PHONE NUMBER */}
                                    <div className="col-xs-6">
                                        <div
                                            className="form__wrapper wow fadeInDown"
                                            data-wow-delay="0.5s"
                                        >
                                            <input
                                                type="text"
                                                className="form__input"
                                                id="phone_other"
                                                name="phone_other"
                                            />
                                            <label className="form__label" htmlFor="first name">
                                                <span className="form__label-content">Other phone Number</span>
                                            </label>
                                        </div>
                                    </div>
                                    {/* HOME ADDRESS */}
                                    <div className="col-xs-12">
                                        <div
                                            className="form__wrapper wow fadeInDown"
                                            data-wow-delay="0.5s"
                                        >
                                            <textarea className="form__input"
                                                id="address"
                                                name="address" required></textarea>

                                            <label className="form__label" htmlFor="first name">
                                                <span className="form__label-content">Home Address</span>
                                            </label>
                                        </div>
                                    </div>

                                    {/*   <div className="col-xs-12 col-lg-12 col-md-12">
                                        <div
                                            className="form__wrapper wow fadeInDown"
                                            data-wow-delay="0.5s"
                                        > */}

                                    {/*   <select className="form__input home_church"
                                                id="home_church" name="home_church">
                                                <optgroup>
                                                    <option value=""></option> */}
                                    {/*  {homechurches.map(({ grpId, ...churchlocationProps }) => (

< HomeChurchSelectOption key={grpId} {...churchlocationProps} />
))}
*/}{/* 
{homechurches.map((home, index) => <option key={index}>{home.grp_Location}</option>)} */}

                                    {/*  {homechurches.map((home, index) => < HomeChurchSelectOption key={index} {...home} />)}
                                                </optgroup>
                                            </select> */}
                                    {/*   <label className="form__label" htmlFor="first name">
                                                <span className="form__label-content">Home Church</span>
                                            </label>
                                        </div>
                                    </div> */}
                                    {/* MARITAL STATUS */}
                                    <div className="col-xs-4">
                                        <div
                                            className="form__wrapper wow fadeInDown"
                                            data-wow-delay="0.5s"
                                        >

                                            <select className="form__input"
                                                id="marital_status" name="marital_status">
                                                <option value=""></option>
                                                <option value="single">Single</option>
                                                <option value="married">Married</option>
                                                <option value="dirvocee">Dirvocee</option>
                                                <option value="widower">Widower</option>

                                            </select>
                                            <label className="form__label" htmlFor="first name">
                                                <span className="form__label-content">Marital Status</span>
                                            </label>
                                        </div>
                                    </div>

                                    {/* BIRTHDAY */}
                                    <div className="col-xs-4">
                                        <div
                                            className="form__wrapper wow fadeInDown input-daterange "
                                            data-wow-delay="0.5s"
                                        >
                                            <input
                                                type="text"
                                                className="dateselect form__input"
                                                required="required"
                                                id="birthday"
                                                name="birthday"
                                            />
                                            <label className="form__label" htmlFor="date">
                                                <span className="form__label-content">Birthday</span>
                                            </label>
                                        </div>
                                    </div>
                                    {/* OCCUPATION */}
                                    <div className="col-xs-4">
                                        <div
                                            className="form__wrapper wow fadeInDown"
                                            data-wow-delay="0.5s"
                                        >
                                            <input
                                                type="text"
                                                className="form__input"
                                                required="required"
                                                id="occupation"
                                                name="occupation"
                                            />
                                            <label className="form__label" htmlFor="occupation">
                                                <span className="form__label-content">Occupation</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="col-xs-12">

                                    </div>
                                    <div className="col-xs-6">
                                        {" "}
                                        <div
                                            className="form__wrapper--submit wow fadeInLeft"
                                            data-wow-delay="0.7s"
                                        >
                                            <div className="form__input-submit">
                                                <button
                                                    className="btn btn-block btn-success"
                                                    type="submit"
                                                    data-dismiss="modal"
                                                >
                                                    Submit
</button>
                                            </div>
                                        </div>
                                    </div>



                                    <div className="col-xs-6">
                                        {" "}
                                        <div
                                            className="form__wrapper--submit wow fadeInLeft"
                                            data-wow-delay="0.7s"
                                        >
                                            <div className="form__input-submit">
                                                <button
                                                    className="btn btn-block btn-danger"
                                                    type="reset"
                                                    data-dismiss="modal"
                                                >
                                                    Clear
</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </form>

                        </section>
                    </section>
                </div>

            


        </div>
    </section>
    )
}

export default WelcomeForm
