const contentData = [
  {
    id: 1,
    subtitle: "Get Started",
    title: "What level of hiker are you?",
    desc: `Determining what level of hiker you are can be an important tool when planning future hikes.
    This hiking level guide will help you plan hikes according to different hike ratings set by various
    websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced
    moderate, expert, or expert backpacker?`,
    url: "src/assets/pascal-1.jpeg",
  },
  {
    id: 2,
    subtitle: "Hiking Essentials",
    title: "Picking the right Hiking Gear!",
    desc: `The nice thing about beginning hiking is that you don’t really need any special gear, you can
    probably get away with things you already have.
    Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes,
     which will get heavy and chafe wif they get sweaty or wet.`,
    url: "src/assets/pascal-2.jpeg",
  },
  {
    id: 3,
    subtitle: "Where You Go Is The Key",
    title: "Understand Your Map & Timing",
    desc: `To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag.
    Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next
    landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn
    at the junction...`,
    url: "src/assets/pascal-3.jpeg",
  },
];

// const contentData = [
//   {
//     id: 1,
//     subtitle: "Get Started",
//     title: "What level of hiker are you?",
//     desc: `Determining what level of hiker you are can be an important tool when planning future hikes.
//   This hiking level guide will help you plan hikes according to different hike ratings set by various
//   websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced
//   moderate, expert, or expert backpacker?`,
//     url: "src/assets/pascal-1.jpeg",
//   },
// ];
const Home = () => {
  return (
    <div className="bg-white">
      <section className="bg-hero h-[100vh] bg-cover bg-center">
        <div
          className="relative top-[25%] mx-auto flex max-w-[60%] flex-col items-start 
         gap-10 text-left font-medium text-white"
        >
          <p className="flex items-center gap-5 text-2xl text-sec">
            <div className="h-[2px] w-16 bg-sec"></div> A Beach Traveling Guide
          </p>
          <h1 className="text-6xl font-medium">
            Be Prepared For The Astonishing Lanscape And Beyond!
          </h1>
          <a className="text-2xl" href="#content">
            Scroll down &darr;
          </a>
        </div>
      </section>

      <section className="bg-prima " id="content">
        {contentData.map((contentItem) => {
          return (
            <div
              className="flex h-screen items-center justify-center border-2 border-solid border-red-400 p-32 text-white"
              key={contentItem.id}
            >
              <div
                className={`flex justify-between ${
                  contentItem.id % 2 === 0 ? "flex-row-reverse" : ""
                }`}
              >
                {/* text description */}
                <div className="flex max-w-[40%] flex-col justify-center gap-8 font-medium leading-loose">
                  <p className="flex items-center gap-4 text-xl  text-sec">
                    {`0${contentItem.id}`}
                    <div className="h-[2px] w-12 bg-sec"></div>
                    {contentItem.subtitle}
                  </p>
                  <h2 className="text-6xl font-bold">{contentItem.title}</h2>
                  <p className="font-nunito">{contentItem.desc}</p>
                  <p className=" text-sec">read more &rarr;</p>
                </div>

                {/* image */}

                <img
                  className="h-[680px] w-[480px] rounded object-cover object-center"
                  src={contentItem.url}
                  alt={contentItem.title}
                />
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Home;
