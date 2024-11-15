import React, { useState } from 'react';
import { FaCog } from 'react-icons/fa';
import { IoCallOutline } from 'react-icons/io5';
import { SlNote } from 'react-icons/sl';
import { BiMenuAltLeft } from 'react-icons/bi';
import { SiCircle } from 'react-icons/si';
import { IoIosMenu } from 'react-icons/io';
import { BsChatText } from 'react-icons/bs';
import { CiStar } from "react-icons/ci";
import { GoArchive } from "react-icons/go";
import { CiSettings } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { CiVideoOn } from "react-icons/ci";
import { HiOutlineMicrophone } from "react-icons/hi2";
import { chats, calls } from '../Data'; // Assuming chats and calls are arrays in Data.js

const WhatsappClone = () => {
  const [activeChat, setActiveChat] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('chats'); // New state for section

  return (
    <>
      <div className="h-screen flex">
        {/* Left Vertical Sidebar */}
        <div className="w-16 bg-gray-100 border-r border-gray-300 flex flex-col items-center py-4">
          {/* Icons Section */}
          <div className="space-y-6 flex flex-col pt-1">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="text-gray-600  text-2xl z-50 pb-4"
            >
              <IoIosMenu />
            </button>
            <button
              className={`text-gray-600 relative text-xl ${activeSection === 'chats' ? 'text-green-500' : ''}`}
              onClick={() => setActiveSection('chats')}
            >
              <BsChatText />
            </button>
            <button
              className={`text-gray-600 relative text-xl ${activeSection === 'calls' ? 'text-red-500' : ''}`}
              onClick={() => setActiveSection('calls')}
            >
              <IoCallOutline />
            </button>
            <button className="text-gray-600 text-xl">
              <SiCircle />
            </button>
          </div>

          {/* Spacer */}
          <div className="flex-grow"></div>

          {/* Settings and Profile */}
          <div className=' flex flex-col gap-7 items-center  pb-5'>
          <button className="text-gray-600 hover:text-gray-700 text-xl">
          <CiStar />
          </button>
          <button className="text-gray-600 hover:text-gray-700 text-xl">
          <GoArchive />
          </button>

          <button className="text-gray-600 hover:text-gray-700 text-xl">
          <CiSettings />
          </button>
          <button className="text-gray-600 hover:text-gray-700 text-xl">
            <img src="../assets/img/WhatsApp Image 2024-04-30 at 12.40.30_680a7b04.jpg" className=' h-6 w-6 rounded-full' alt="" />
          </button>
          </div>

        </div>

        {/* Left Sidebar with Slide-in Animation */}
        <div
          className={`fixed inset-y-0 left-0 bg-gray-100 w-52 transform ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out z-40`}
        >
          {/* Sidebar Content */}
          <div className="py-4 h-full flex flex-col">
            {/* Icons Section */}
            <div className="space-y-1 flex flex-col pt-16">
              <div
                className="flex items-center gap-5 hover:bg-gray-200 w-full pl-5 py-2"
                onClick={() => {
                  setActiveSection('chats');
                  setIsSidebarOpen(false);
                }}
              >
                <button
                  className={`text-gray-500 relative text-xl ${
                    activeSection === 'chats' ? 'text-green-500' : ''
                  }`}
                >
                  <BsChatText />
                </button>
                <p className=' text-sm text-gray-600'>Chats</p>
              </div>
              <div
                className="flex items-center gap-5 hover:bg-gray-200 w-full pl-5 py-2"
                onClick={() => {
                  setActiveSection('calls');
                  setIsSidebarOpen(false);
                }}
              >
                <button
                  className={`text-gray-500 relative text-xl ${
                    activeSection === 'calls' ? 'text-red-500' : ''
                  }`}
                >
                  <IoCallOutline />
                </button>
                <p className=' text-sm text-gray-600'>Calls</p>
              </div>
              <div className="flex items-center gap-5 hover:bg-gray-200 w-full pl-5 py-2">
                <button className="text-gray-500 text-xl">
                  <SiCircle />
                </button>
                <p className=' text-sm text-gray-600'>Status</p>
              </div>
            </div>

            {/* Spacer to push the settings button to the bottom */}
            <div className="flex-grow"></div>

            {/* Settings and Profile at the bottom */}
            <div className=' flex flex-col gap-2 items-center  pb-5'>

                <div className="flex items-center gap-5 hover:bg-gray-200 w-full pl-5 py-2" >

          <button className="text-gray-500 hover:text-gray-700 text-xl">
          <CiStar />

          
          </button>
          <p className=' text-sm text-gray-600'>Starred messages</p>
          </div>
                <div className="flex items-center gap-5 hover:bg-gray-200 w-full pl-5 py-2" >

          <button className="text-gray-500 hover:text-gray-700 text-xl">
          <GoArchive />
          </button>
          <p className=' text-sm text-gray-600'>Archived chats</p>
          </div>

          <div className="flex items-center gap-5 hover:bg-gray-200 w-full pl-5 py-2" >

          <button className="text-gray-500 hover:text-gray-700 text-xl">
          <CiSettings />
          </button>
          < p className=' text-sm text-gray-600'>Settings</p>
          </div>

          <div className="flex items-center gap-5 hover:bg-gray-200 w-full pl-5 py-2" >

          <button className="text-gray-500 hover:text-gray-700 text-xl ">
            <img src="../assets/img/WhatsApp Image 2024-04-30 at 12.40.30_680a7b04.jpg" className=' h-6 w-6 rounded-full' alt="" />
          </button>
          <p className=' text-sm text-gray-600'>Profile</p>
          </div>

          </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-4 flex-grow">
          {/* Sidebar */}
          <div className="bg-[#f0f0f0] border-r border-gray-300 overflow-y-auto">
            {/* Sidebar Header */}
            <div className="p-4 flex justify-between items-center bg-white border-b border-gray-200">
              <h2>{activeSection === 'chats' ? 'Chats' : 'Calls'}</h2>
              <div className="flex space-x-4">
                <button className="hover:text-gray-500">
                  <SlNote />
                </button>
                <button className="hover:text-gray-500">
                  <BiMenuAltLeft />
                </button>
              </div>
            </div>

            {/* Search Input */}
            <div className="p-4 bg-white">
              <input
                type="text"
                placeholder={`Search or start new ${
                  activeSection === 'chats' ? 'chat' : 'call'
                }`}
                className="w-full p-2 rounded-lg border border-gray-300"
              />
            </div>

            {/* Chat or Call List */}
            <div className="overflow-auto custom-scrollbar scroll-auto h-[calc(100vh-160px)] bg-white">
              {activeSection === 'chats' ? (
                chats.map((chat, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 hover:bg-gray-200"
                    onClick={() => setActiveChat(chat)}
                  >
                    <div className="flex items-center gap-4">
                      <img src={chat.img} alt="" className="h-12 w-12 rounded-full" />
                      <div>
                        <h2 className="text-sm font-bold">{chat.name}</h2>
                        <p className="text-[12px] text-gray-600">{chat.message}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-[12px] text-gray-600">{chat.seen}</p>
                    </div>
                  </div>
                ))
              ) : (
                calls.map((call, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 hover:bg-gray-200"
                    onClick={() => setActiveChat(call)}
                  >
                    <div className="flex items-center gap-4">
                      <img src={call.img} alt="" className="h-12 w-12 rounded-full" />
                      <div className="space-y-1">
                        <h2 className="text-sm font-bold">{call.name}</h2>
                        <div className="flex items-center gap-1">
                          <div className="text-sm">{call.calls}</div>
                          <p className="text-[12px] text-gray-600">{call.message}</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-[12px] text-gray-600">{call.seen}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Chat Panel */}
          <div className="col-span-3 bg-[#efeae2] flex flex-col">
            {/* Chat Header */}
            {activeChat !== null && activeSection === 'chats' && (
              <div className="p-4 bg-white text-white flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <img src={activeChat.img} alt="" className="h-12 w-12 rounded-full" />
                  <h2 className="text-sm font-bold text-black">{activeChat.name}</h2>
                </div>
                <div className="flex items-center space-x-4 text-gray-400 text-2xl pr-6">
                  <button><CiVideoOn /></button>
                  <button>
              <IoCallOutline />

                  </button>
                  <button><CiSearch /></button>
                </div>
              </div>
            )}

            {/* Chat Messages */}
            <div className="flex-grow p-10 overflow-y-auto bg-[#efeae2]">
              {activeChat !== null && activeSection === 'chats' ? (
                <div className="flex flex-col gap-4">
                     <div className="self-end bg-[#d9fdd3] p-2 rounded-lg max-w-md">
                    {activeChat.message}
                  </div>
                  {activeChat.messages.map((message, idx) => (
                    
                    <div
                      key={idx}
                      className={`self-${message.sender === 'self' ? 'end' : 'start'} ${
                        message.sender === 'self' ? 'bg-[#d9fdd3]' : 'bg-white'
                      } p-2 rounded-lg  w-max`}
                    >
                      {message.text}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="h-full flex items-center justify-center">
                  <p className="text-gray-600">
                    {activeSection === 'chats'
                      ? 'Select a chat to start messaging'
                      : 'Select a call to view details'}
                  </p>
                </div>
              )}
            </div>
              {/* Message Input */}
              {activeChat !== null && activeSection === 'chats' && (
              <div className="p-4 bg-white flex items-center gap-4 border-t border-gray-300">
                <input
                  type="text"
                  placeholder="Type a message"
                  className="w-full p-3 rounded-lg border border-gray-300"
                />
                <button className=' text-2xl'><HiOutlineMicrophone /></button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatsappClone;
