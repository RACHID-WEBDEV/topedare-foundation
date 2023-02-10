import React, { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser';
import Button from '../components/form/Button'
import Fade from 'react-reveal/Fade';
import PagesIntro from '../components/global/PagesIntro';
import SectionSubTitle from '../components/section/SectionSubTitle';
import { toast } from 'react-toastify';
import Helmets from './Helmet';


const Contact = () => {

    const initialValues = { fname: "", email: "", phone: "", message: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const form = useRef();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));

        if ((Object.keys(formErrors).length === 0 && isSubmit)) {

            emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_EMAIL_TEMPLATE_ID, form.current,
                process.env.REACT_APP_PUBLIC_KEY)
                .then((result) => {
                    console.log(result.text);
                    setFormValues(initialValues)
                    toast.success('Message sent Successfully!');
                    console.log('Message Sent Successfully')
                }, (error) => {
                    console.log(error.text);
                });
        } else {
            setIsSubmit(true);
        }

    };


    useEffect(() => {
        // console.log(formErrors);
        if ((Object.keys(formErrors).length === 0 && isSubmit)) {
            console.log(formValues);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formErrors]);

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!values.fname) {
            errors.fname = "Fullname is required!";
        }
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        if (!values.phone) {
            errors.phone = "phone is required";
        } else if (values.phone.length < 11) {
            errors.phone = "phone must be more than 11 characters";
        } else if (values.phone.length > 14) {
            errors.phone = "phone cannot exceed more than 14 characters";
        }
        if (!values.message) {
            errors.message = "Message is required!";
        }

        return errors;
    };

    return (
        <>
            <Helmets title="Contact Us Page" />
            <PagesIntro title="Get in touch" />

            <main className="pt-[1.5rem] lg:pt-10 ">
                <div className="block">
                    <Fade bottom>

                        <SectionSubTitle className="text-center max-w-2xl mx-auto" subTitle=" We are here to support you every step of the way" />
                    </Fade>
                </div>

                <section className=" relative px-3 lg:px-16 py-8 lg:py-20 ">

                    <div className="container">
                        <div className="lg:flex">
                            {/* Contact Form */}
                            <Fade bottom>
                                <div className="mb-12 lg:mb-0 lg:w-2/3 lg:pr-12">
                                    <h2 className="text-gray-800 mb-4 text-2xl">Contact Us</h2>
                                    <p className="text-gray-600 mb-6 lg:mb-12">
                                        Have a question? Need help? Don&apos;t hesitate, drop us a line
                                    </p>

                                    {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
                                        <div className="text-green-500 text-2xl">Message Sent Successfully</div>
                                    ) : (
                                        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
                                    )} */}
                                    <form ref={form} id="contact-form" onSubmit={handleSubmit}>
                                        <div className="flex space-x-7">
                                            <div className="mb-6 w-1/2">
                                                <label htmlFor="name" className="font-display text-gray-700 mb-1 block text-lg">Name<span className="text-red-500">*</span></label>
                                                <input
                                                    name="fname"
                                                    value={formValues.fname}
                                                    onChange={handleChange}
                                                    className="contact-form-input border-2 border-gray-200 hover:ring-gray-200 focus:ring-gray-200 outline-none w-full rounded-lg py-3 px-2 hover:ring-2"
                                                    id="name" type="text" />
                                                <p className="text-red-500 mt-1">{formErrors.fname}</p>
                                            </div>
                                            <div className="mb-6 w-1/2">
                                                <label htmlFor="email" className="font-display text-gray-700 mb-1 block text-lg">Email<span className="text-red-500">*</span></label>
                                                <input name="email" className="contact-form-input  border-2 border-gray-200 hover:ring-gray-200 focus:ring-gray-200 outline-none w-full rounded-lg py-3 px-2 hover:ring-2" id="email" type="email"
                                                    value={formValues.email}
                                                    onChange={handleChange}
                                                />
                                                <p className="text-red-500 mt-1">{formErrors.email}</p>
                                            </div>
                                        </div>
                                        <div className="mb-6 w-full">
                                            <label htmlFor="phone" className="font-display text-gray-700 mb-1 block text-lg">Phone Number<span className="text-red-500">*</span></label>
                                            <input name="phone"
                                                value={formValues.phone}
                                                onChange={handleChange}
                                                className="contact-form-input  border-2 border-gray-200 hover:ring-gray-200 focus:ring-gray-200 outline-none w-full rounded-lg py-3 px-2 hover:ring-2" id="phone" type="number" />
                                            <p className="text-red-500 mt-1">{formErrors.phone}</p>
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="message" className="font-display text-gray-700 mb-1 block text-lg">Message<span className="text-red-500">*</span></label>
                                            <textarea id="message" className="contact-form-input  border-2 border-gray-200 hover:ring-gray-200 focus:ring-gray-200 outline-none w-full rounded-lg py-3 px-2 hover:ring-2" name="message"
                                                value={formValues.message}
                                                onChange={handleChange}
                                                rows={5} defaultValue={""} />
                                            <p className="text-red-500 mt-1">{formErrors.message}</p>
                                        </div>
                                        {/* <div className="mb-6 flex items-center space-x-2">
                                            <input type="checkbox"
                                                value={formValues.agreeToTerms}
                                              
                                                id="checked"
                                                // checked={isChecked}
                                                // onChange={e => setIsChecked(e.target.checked)}

                                                name="agreeToTerms" className="checked:bg-tdf-blue-50 dark:bg-gray-600 text-accent border-gray-200 focus:ring-accent/20 dark:border-gray-500 h-5 w-5 self-start rounded focus:ring-offset-0" />
                                            <label htmlFor="checked" className="dark:text-gray-200 text-sm">I agree to the Terms of Service</label>
                                        </div> */}
                                        <p className="text-red-500 mt-1">{formErrors.agreeToTerms}</p>
                                        <Button
                                            className=" capitalize" >
                                            Submit
                                        </Button>


                                        <div id="contact-form-notice" className="relative mt-4 hidden rounded-lg border border-transparent p-4" />
                                    </form>
                                </div>
                            </Fade>
                            <Fade right>
                                <div className="lg:w-1/3 lg:pl-5">
                                    <h2 className="font-display text-gray-800 mb-4 text-xl">Information</h2>
                                    <p className="text-gray-600 mb-6 text-base lg:text-[1.125rem] xl:text-lg leading-normal">
                                        Don&apos;t hesitate, drop us a line Let&apos;s talk
                                        about Sponsorship. Feel free to ask us any question and let’s start talking about our collaboration.




                                    </p>
                                    <div className=" dark:border-gray-600 border-gray-200 rounded-[1.25rem] border bg-gray-50 p-6 py-10">
                                        <div className="mb-6 flex items-center space-x-5">
                                            <span className=" dark:border-gray-600 border-gray-200 bg-light-base flex h-11 w-11 shrink-0 items-center justify-center rounded-full border">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="fill-gray-400">
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M9.366 10.682a10.556 10.556 0 0 0 3.952 3.952l.884-1.238a1 1 0 0 1 1.294-.296 11.422 11.422 0 0 0 4.583 1.364 1 1 0 0 1 .921.997v4.462a1 1 0 0 1-.898.995c-.53.055-1.064.082-1.602.082C9.94 21 3 14.06 3 5.5c0-.538.027-1.072.082-1.602A1 1 0 0 1 4.077 3h4.462a1 1 0 0 1 .997.921A11.422 11.422 0 0 0 10.9 8.504a1 1 0 0 1-.296 1.294l-1.238.884zm-2.522-.657l1.9-1.357A13.41 13.41 0 0 1 7.647 5H5.01c-.006.166-.009.333-.009.5C5 12.956 11.044 19 18.5 19c.167 0 .334-.003.5-.01v-2.637a13.41 13.41 0 0 1-3.668-1.097l-1.357 1.9a12.442 12.442 0 0 1-1.588-.75l-.058-.033a12.556 12.556 0 0 1-4.702-4.702l-.033-.058a12.442 12.442 0 0 1-.75-1.588z" />
                                                </svg>
                                            </span>
                                            <div>
                                                <h6 className="font-display text-gray-700 block text-base">Phone</h6>
                                                <a href="tel:+2348023123393" className="text-gray-500 hover:text-accent dark:text-gray-300 font-DmSans text-lg">
                                                    +(234) 802 3123 393</a>
                                            </div>
                                        </div>
                                        <div className="mb-6 flex items-center space-x-5">
                                            <span className=" dark:border-gray-600 border-gray-200 bg-light-base flex h-11 w-11 shrink-0 items-center justify-center rounded-full border">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="fill-gray-400">
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M12 20.9l4.95-4.95a7 7 0 1 0-9.9 0L12 20.9zm0 2.828l-6.364-6.364a9 9 0 1 1 12.728 0L12 23.728zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
                                                </svg>
                                            </span>
                                            <div>
                                                <h6 className="font-display text-gray-700 block text-base">Address</h6>
                                                <address className="text-gray-500 dark:text-gray-300 font-DmSans text-base">The BrickHouse

                                                    26 Yemi Gbenle street, Off Channels Television Avenue, Isheri North, Lagos, Nigeria

                                                </address>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-5">
                                            <span className=" dark:border-gray-600 border-gray-200 bg-light-base flex h-11 w-11 shrink-0 items-center justify-center rounded-full border">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="fill-gray-400">
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M2.243 6.854L11.49 1.31a1 1 0 0 1 1.029 0l9.238 5.545a.5.5 0 0 1 .243.429V20a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.283a.5.5 0 0 1 .243-.429zM4 8.133V19h16V8.132l-7.996-4.8L4 8.132zm8.06 5.565l5.296-4.463 1.288 1.53-6.57 5.537-6.71-5.53 1.272-1.544 5.424 4.47z" />
                                                </svg>
                                            </span>
                                            <div>
                                                <h6 className="font-display text-gray-700 block text-base">Email</h6>
                                                <a href="mailto:Enquiry@topedare.com">
                                                    <span className="text-gray-500 hover:text-accent  font-DmSans text-lg not-italic">Enquiry@topedare.com</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </Fade>
                        </div>
                    </div>
                </section>
                {/* end contact */}
            </main>

        </>
    )
}

export default Contact