"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import ProjectCard from "./ProjectCard";
import { projects } from "./projectsData";
import "./ProjectSection.css";

const Project = () => {
  return (
    <section id="projects" className="pb-10 pt-24">
      <div className="flex justify-center text-4xl font-semibold gap-2">
        <h3 className="text-custom-dark-bluee">Projects</h3>
      </div>
      <br />

      <div className="relative max-w-5xl mx-auto">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{
            clickable: true,
            el: ".custom-swiper-pagination",
          }}
          navigation={{
            nextEl: ".custom-swiper-button-next",
            prevEl: ".custom-swiper-button-prev",
          }}
          autoplay={{ delay: 3000 }}
          modules={[Pagination, Autoplay, Navigation]}
          className="gap-6 px-5 items-center justify-center"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-center mt-4 items-center space-x-2">
          <div className="custom-swiper-button-prev text-2xl cursor-pointer">
            {"<"}
          </div>
          <div className="custom-swiper-pagination flex justify-center mx-2"></div>
          <div className="custom-swiper-button-next text-2xl cursor-pointer">
            {">"}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
