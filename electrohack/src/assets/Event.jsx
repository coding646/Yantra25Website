import react from 'react';
import BlurText from '../../assets/textanimations/BlurText/BlurText'
import Timeline from './Timeline'

const milestones = [
    {
      title: "Workshop",
      date: "3rd February 21:00 - 00:00",
      description: "Lorem Ipsum Odor Sit Amet"
    },
    {
      title: "Idea Review (Review 0)",
      date: "4th February 3:00",
      description: "Semper turpis non congue litora"
    },
    {
      title: "Review 1",
      date: "4th February 12:00",
      description: "iaculis penatibus quis duis"
    },
    {
      title: "Review 2",
      date: "4th February 18:00",
      description: "Accumsan netus malesuada"
    },
    {
      title: "Review 3",
      date: "4th February 23:00",
      description: "consectetuer adipiscing elit"
    },
    {
      title: "Final Review and Conclusion",
      date: "5th February 11:00",
      description: "primis conubia diam primis"
    }
  ];

export default function Event(){
    const handleAnimationComplete = () => {
        console.log('Animation completed!');
      };
      

    return(
        <div className='mb-48'>
            <div className='flex flex-col align-center'>
                <img src={"../../public/logo (2).png"}/>
                <div className="text-center gradienttext1 mb-16" style={{fontSize:"6vw", fontFamily:'"Jersey 15", serif'}}>All Set To Trailblaze?</div>
                <div className='flex flex-row justify-center'>
                <BlurText
  text="Lorem ipsum odor amet, consectetuer adipiscing elit. "
  delay={50}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className=" text-3xl mb-4 text-white"
  style={{fontSize:"6vw",}}
/>
                </div>
                <div className='flex flex-row justify-center'>
                <BlurText
  text="Semper turpis non congue litora; iaculis penatibus quis duis."
  delay={50}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className=" text-3xl mb-4 text-white"
  style={{fontSize:"6vw",}}
/>
                </div>

                <div className='flex flex-row justify-center'>
                <BlurText
  text="Accumsan netus malesuada, primis conubia diam primis."
  delay={50}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className=" text-3xl text-white"
  style={{fontSize:"6vw",}}
/>
                </div>
            </div>
            <div className="container mx-auto px-4 mt-24">
        <div className="py-12 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Event Timeline</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Check out how the event unfolds
          </p>
        </div>
        <Timeline milestones={milestones} />
      </div>
        </div>
    )
}