import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiUsers } from "react-icons/fi";
import { FaStar, FaBuromobelexperte, FaCartPlus } from "react-icons/fa";
import { HiCurrencyBangladeshi } from "react-icons/hi";
import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import { MdNotStarted } from "react-icons/md";


const CourseCard = ({ course, handleDetailsClick, isEnrolled }) => {
  console.log(isEnrolled);

  const navigate = useNavigate();

  const handleViewCourse = (courseOutline) => {
    navigate("/coursepage", { state: { courseOutline } });
  };




  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="rounded-lg  shadow-md border-4  space-y-2"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="relative"
      >
        <img
          className="h-44 w-full rounded-md"
          src={course.courseThumbnail}
          alt={`Thumbnail for ${course.title}`}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="shadow-md text-xs w-56 bg-gray-700 border-2 text-white bg-opacity-80 flex items-center gap-2 absolute rounded-e-md px-4 py-[4px] bottom-3 z-10"
        >
          <img
            src="https://media.discordapp.net/attachments/1137192144587739287/1144607311084654622/videos-teachers-768x432.jpg"
            className="h-6 shadow-md w-6 rounded-full"
            alt=""
          />
          <p className="font-Poppins">
            {course.instructor || <Skeleton count={10}></Skeleton>}
          </p>
        </motion.div>
      </motion.div>
      <div className="px-5 h-14">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-bold font-Lexend"
        >
          {course.title}
        </motion.h1>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex items-center gap-1 px-4"
      >
        <HiCurrencyBangladeshi className="text-[#1bbf72fa] text-lg" />
        <p className="font-bold font-mono text-sm">{course.coursePrice}.00</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="font-mono h-14 flex justify-between px-4 items-center"
      >
        <div className="flex items-center justify-center gap-1">
          <FaBuromobelexperte className="text-[#1bbf72f6]" />
          <p className="font-semibold font-LeagueSpartan">Advance</p>
        </div>

        <div className="flex items-center justify-center gap-1">
          <FiUsers className="text-[#1bbf72fb]" />
          <p className="font-semibold">588</p>
        </div>

        <div className="flex items-center justify-center gap-1">
          <FaStar className="text-[#1bbf72fa]" />
          <p className="font-semibold">58</p>
        </div>
      </motion.div>
      <div className="bg-[#1bbf725e] h-[1px] "></div>
      <div className="py-2 flex justify-between px-4">
        {isEnrolled ? (
          <button className="flex items-center justify-center gap-1 px-2 py-1 rounded-md shadow-md border border-[#1bbf726c] duration-500 hover:bg-[#1bbf723d] hover:text-[#1bbf72fa]"
          onClick={() =>handleViewCourse(course.courseOutline)}
          >
            <MdNotStarted className="text-[#1bbf72fb]"></MdNotStarted>

            <p className="font-bold font-mono">View Course</p>
          </button>
        ) : (
          <button className="flex items-center justify-center gap-1 px-2 py-1 rounded-md shadow-md border border-[#1bbf726c] duration-500 hover:bg-[#1bbf723d] hover:text-[#1bbf72fa]">
            <FaCartPlus className="text-[#1bbf72fb]" />
            <Link to={`/checkout/${course._id}`}>
              <p className="font-bold font-mono">Enroll Now</p>
            </Link>
          </button>
        )}

        <button
          className="text-gray-700 font-Raleway border-2 font-bold text-xs rounded-md px-4 css-selector hover:border-[#1bbf7246] duration-500 hover:bg-[#1bbf7249] hover:text-gray-600 shadow-md"
          onClick={() => handleDetailsClick(course)}
        >
          Details
        </button>
      </div>
    </motion.div>
  );
};

export default CourseCard;
