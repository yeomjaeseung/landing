import Debutler_Big from '../assets/img/debutler-big.png';
import first from '../assets/img/1st.png';
import second from '../assets/img/2nd.png';
import third from '../assets/img/3rd.png';
import JoinButton from '../components/joinButton';
export default function AboutPage() {
  return (
    <div className="h-full min-h-screen bg-neutral-950">
      <div className=" h-screen flex items-center justify-center pt-20">
        <img src={Debutler_Big} alt="Logo" />
        <div className="text-9xl font-bold text-white">
          Empower
          <br /> Your
          <br /> Blockchain
          <br />
          Onborading
        </div>
      </div>

      <div className="text-6xl text-white font-bold flex justify-center mt-10 ">
        Who We Are?
      </div>

      <div className="w-full h-full flex flex-col mt-10">
        {sections.map((section, index) => (
          <div
            key={index}
            className="flex w-full h-full items-center justify-center"
          >
            {section.imageFirst && (
              <div className="w-[700px] h-fit min-h-[400px] border border-white">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-[400px]"
                />
              </div>
            )}
            <div className="w-[700px] h-fit min-h-[400px] border border-white flex flex-col gap-12 justify-center px-10">
              <h1 className="text-white font-bold text-5xl">{section.title}</h1>
              <p className="text-white text-2xl">{section.content}</p>
            </div>
            {!section.imageFirst && (
              <div className="w-[700px] h-fit min-h-[400px] border border-white">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-[400px]"
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="w-full h-[700px] text-white font-bold flex flex-col items-center justify-center ">
        <span className="text-[100px]">Join Us!</span>
        <span className="text-4xl"> 3기 모집예정</span>
        <JoinButton />
      </div>
    </div>
  );
}
const sections = [
  {
    title: 'As a Leader',
    content:
      "Our academic society is dedicated to unlocking blockchain's potential to benefit technology and society at large.",
    image: first,
    imageFirst: true,
  },
  {
    title: 'As a Partner',
    content:
      'De-Butler will be your partner, assisting to elevate your efforts to a new level of success.',
    image: second,
    imageFirst: false,
  },
  {
    title: 'As a Community',
    content:
      'In our community, every member is valued and empowered, forging a path through the blockchain realm with confidence and camaraderie.',
    image: third,
    imageFirst: true,
  },
];
