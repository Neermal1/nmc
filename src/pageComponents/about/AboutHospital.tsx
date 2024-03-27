interface Props {
  estDesc: string;
  //   mgmtDesc: string
}

export default function AboutHospital() {
  return (
    <section className="py-2 lg:py-4">
      <div>
        <h1 className="text-lg md:text-2xl font-bold">Introduction</h1>
        <p className="text-sm md:text-base lg:text-lg mt-2 text-justify">
          Established in 1997, Nepal Medical College (NMC) stands as a pivotal
          institution in Nepal&apos;s healthcare sector, situated in the heart
          of Kathmandu. With a steadfast vision of delivering top-tier medical
          education and catering to the escalating healthcare demands of the
          nation, NMC embarked on its journey with a dedication to excellence.
          Endorsed by the Nepal Medical Council and affiliated with Kathmandu
          University, NMC commenced its operations with a mission to nurture the
          next generation of healthcare professionals. Through the years, it has
          evolved into a renowned establishment, offering a spectrum of
          undergraduate and postgraduate medical programs. NMC&apos;s enduring
          commitment has not only shaped the medical landscape but has also
          played a pivotal role in fortifying Nepal&apos;s medical workforce and
          enhancing the healthcare framework. <br /> <br /> NMC&apos;s legacy is
          characterized by its unwavering dedication to academic prowess and
          service to the community. With a curriculum designed to foster
          comprehensive learning and practical skills, the institution has
          consistently upheld standards of excellence in medical education. Its
          graduates, equipped with profound knowledge and clinical expertise,
          have become integral to the fabric of Nepal&apos;s healthcare system.
          Beyond academic pursuits, NMC actively engages in research endeavors
          and community outreach initiatives, further solidifying its position
          as a cornerstone of Nepal&apos;s medical fraternity. As it continues
          to evolve and adapt to the dynamic healthcare landscape, Nepal Medical
          College remains steadfast in its mission to shape compassionate,
          competent, and ethical healthcare professionals who serve the nation
          with distinction.
        </p>
      </div>
      <div className="mt-4 ">
        <h1 className="text-lg md:text-2xl font-bold">Programs</h1>
        <p className="text-sm md:text-base lg:text-lg mt-2 text-justify">
          Nepal Medical College (NMC) offers a comprehensive array of programs
          aimed at fostering the development of proficient healthcare
          professionals. From its inception, NMC has been committed to
          delivering excellence in medical education, offering a range of
          undergraduate and postgraduate programs tailored to meet the evolving
          needs of Nepal&apos;s healthcare sector. Through its undergraduate
          curriculum, students undergo rigorous training encompassing
          fundamental medical sciences, clinical rotations, and practical
          experiences, preparing them for the challenges of modern medical
          practice. Additionally, NMC provides specialized postgraduate
          programs, enabling healthcare professionals to further enhance their
          expertise in various medical disciplines, thereby contributing to the
          advancement of healthcare delivery in Nepal and beyond. With a focus
          on academic rigor, hands-on training, and ethical practice, NMC&apos;s
          programs stand as a testament to its dedication to shaping competent
          and compassionate healthcare professionals poised to make a meaningful
          impact on society.
        </p>
      </div>
    </section>
  );
}
