import React from 'react';
import { TextField } from '@mui/material';
import Button from '../../Component/Shared/Button';
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Header from '../../Component/Shared/Header';

const Contact = () => {
    return (
        <div>
            <div className="">
                <div className="">
                    <div className="flex justify-start items-start mb-15 gap-10 w-8/12 mx-auto">
                        <div className="bg-[#F5F7F8] w-7/12 p-15 text-justify rounded-3xl">
                            <div className="grid gap-2 border-b border-gray-300 pb-8">
                                <Header name={"Contact Us"}></Header>
                                <p className='text-lg text-gray-600'>From small repairs to large-scale installations, our experience electricians provide tailored solutions to power your home.</p>
                            </div>
                            <div className="mt-10">
                                <TextField
                                    id="outlined-name"
                                    label="Name"
                                    fullWidth
                                    sx={{
                                        '& label.Mui-focused': {
                                            color: '#1B4B36',
                                        },
                                        '& .MuiOutlinedInput-root': {
                                            '&.Mui-focused fieldset': {
                                                borderColor: '#1B4B36',
                                            },
                                        },
                                    }}
                                />
                                <div className="flex gap-10 mt-10">
                                    <TextField
                                        id="outlined-email"
                                        label="Email"
                                        fullWidth
                                        sx={{
                                            '& label.Mui-focused': {
                                                color: '#1B4B36',
                                            },
                                            '& .MuiOutlinedInput-root': {
                                                '&.Mui-focused fieldset': {
                                                    borderColor: '#1B4B36',
                                                },
                                            },
                                        }}
                                    />
                                    <TextField
                                        id="outlined-phone"
                                        label="Phone"
                                        fullWidth
                                        sx={{
                                            '& label.Mui-focused': {
                                                color: '#1B4B36',
                                            },
                                            '& .MuiOutlinedInput-root': {
                                                '&.Mui-focused fieldset': {
                                                    borderColor: '#1B4B36',
                                                },
                                            },
                                        }}
                                    />
                                </div>
                                <div className="mt-10">
                                    <TextField
                                        id="outlined-multiline-flexible"
                                        label="Message"
                                        multiline
                                        maxRows={4}
                                        rows={4}
                                        fullWidth
                                        sx={{
                                            '& label.Mui-focused': {
                                                color: '#1B4B36',
                                            },
                                            '& .MuiOutlinedInput-root': {
                                                '&.Mui-focused fieldset': {
                                                    borderColor: '#1B4B36',
                                                },
                                            },
                                        }}
                                    />
                                </div>
                                <div className="mt-10">
                                    <div>
                                        <div className="flex justify-end items-center gap-2 bg-[#FCDE70] hover:bg-[#1B4B36] hover:text-white p-3 rounded-lg font-semibold transition duration-300 cursor-pointer  w-max">
                                            <p>Sent Your Message</p>
                                            <div className="">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        clip-rule="evenodd"
                                                        d="M19.4401 11.0001C17.0996 11.0001 14.9665 8.77909 14.9665 6.34009V5.34009H13.0465V6.34009C13.0465 8.11409 13.7934 9.77809 14.9656 11.0001H3.12012V13.0001H14.9656C13.7934 14.2221 13.0465 15.8861 13.0465 17.6601V18.6601H14.9665V17.6601C14.9665 15.2211 17.0996 13.0001 19.4401 13.0001H20.4001V11.0001H19.4401Z"
                                                        fill="currentColor"
                                                    ></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-6/12 mx-auto">
                            <div className="">
                                <iframe
                                    title="Google Map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14606.342549760537!2d90.42249474084498!3d23.762151297360468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b80a03c8e22f%3A0xd52685f4a2fe003c!2sBanasree%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1746726652214!5m2!1sen!2sbd"
                                    width="100%"
                                    height="550"
                                    style={{ border: 0, borderRadius: '1.5rem' }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                            <div className="mt-15">
                                <div className="flex gap-3 items-center text-xl font-semibold">
                                    <IoLocationOutline />
                                    <p className=''>Location</p>
                                </div>
                                <p>Banasree, Dhaka, Bangladesh</p>
                            </div>
                            <div className="mt-5 flex justify-between w-10/12">
                                <div className="">
                                    <div className="flex gap-3 items-center text-xl font-semibold">
                                        <MdOutlineMailOutline />
                                        <p className=''>Email</p>
                                    </div>
                                    <p>ebrahimislam2003@gmail.com</p>
                                </div>
                                <div className="">
                                    <div className="flex gap-3 items-center text-xl font-semibold">
                                        <FaPhoneAlt />
                                        <p className=''>Phone</p>
                                    </div>
                                    <p>+880 1648438489</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;