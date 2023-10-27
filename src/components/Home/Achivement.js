export default function Achivement() {
  const achivements = [
    {
      id: 1,
      title: "BTEB Merit Scholarship - 2023",
      description:
        "For got CGPA 3.99 out of 4.00 and securing 2nd position in my department in Bangladesh.",
      imageUrl:
        "https://i.ibb.co/LCrQhvK/Whats-App-Image-2023-10-27-at-8-10-18-AM.jpg",
    },
    {
      id: 3,
      title: "Top 5%",
      description:
        "I performed among the top 5% of the class when I finished the Web Development course and finished the assigned task on time",
      imageUrl:
        "https://i.ibb.co/wQ9KmBW/d06487ae-5a7d-4dfd-a35e-4bd865a7819d.jpg",
    },
    {
      id: 4,
      title: "Programming Hero Graduate Black Belt",
      description:
        "I got Programming Hero Graduate Black Belt for good performance",
      imageUrl: "https://i.ibb.co/z4kymxJ/1659276711328.png",
    },
    {
      id: 5,
      title: "15+ Other Courses",
      description:
        "I completed 15+ courses from the Bangladesh government learning platform Muktopaath.",
      imageUrl:
        "https://i.ibb.co/6JfTDZL/screencapture-muktopaath-gov-bd-certificate-list-2023-10-27-08-27-42.png",
    },
    {
      id: 6,
      title: "National Skill Certificate-I in Graphic Design",
      description:
        "I completed the National Skill Certificate-I in Graphic Design, NTVQF Level.",
      imageUrl:
        "https://i.ibb.co/VxrGSRH/Whats-App-Image-2023-10-27-at-8-10-20-AM.jpg",
    },
    {
      id: 7,
      title: "Work Experience With National Call Center 333",
      description:
        "I worked in Bangladesh National Call Center 333 as a Tele-Consultation at Emergency Food Assistance through 333 during the COVID-19 Pandemic.",
      imageUrl:
        "https://i.ibb.co/tLYHRX7/Whats-App-Image-2023-10-27-at-8-10-19-AM.jpg",
    },
  ];

  return (
    <div className="my-10">
      <h3 className="text-primary text-4xl text-center font-bold mb-10 mt-10">
        ACHIVEMENT, HONORS & AWARDS
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        {achivements?.map((achivement, index) => (
          <div
            className={`${
              index % 2 === 0 ? "border-primary" : "border-secondary"
            } m-2 p-5  rounded-lg h-62 md:h-40 grid grid-cols-1 md:grid-cols-2 place-content-center place-items-center border-2`}
            key={achivement.id}
          >
            <div className="ml-2">
              <h2 className="text-2xl font-bold text-primary">
                {achivement?.title}
              </h2>
              <p>{achivement?.description}</p>
            </div>
            <div className="flex justify-center">
              <img
                className="h-64 w-64 md:h-32 md:w-32"
                src={achivement?.imageUrl}
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
