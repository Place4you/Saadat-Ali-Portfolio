"use client"
import Image from 'next/image'

function TechStack() {
  // An array of objects containing the image source and name of each language
  const webTechnologies = [
    { src: '/Images/HTML5.png', name: 'HTML5' },
    { src: '/Images/CSS3.png', name: 'CSS3' },
    { src: '/Images/JavaScript.png', name: 'JavaScript' },
    { src: '/Images/Sass.png', name: 'Sass' },
    { src: '/Images/TypeScript.png', name: 'TypeScript' },
    { src: '/Images/VSCode.png', name: 'VSCode' },
    { src: '/Images/GitHub.png', name: 'GitHub' }



  ]

  const techStack = [
    { src: '/Images/mangodb.png', name: 'MongoDB' },
    { src: '/Images/Express.png', name: 'Express' },
    { src: '/Images/React.png', name: 'React' },
    { src: '/Images/Node.png', name: 'Node' },
    { src: '/Images/Tailwind.png', name: 'Tailwind' }

  ]

  return (
    <div className="container bg-white mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-row-2 gap-8">

        <div>
          <h2 className="text-3xl font-semibold text-center mb-4">
            Web Technologies
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 place-content-center ">
            {webTechnologies.map((language) => (
              <div key={language.name} className="flex flex-col items-center justify-center">
                <Image
                  src={language.src}
                  alt={language.name}
                  width={70}
                  height={70}
                  objectFit='contain'
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-semibold text-center mb-4">Tech Stack</h2>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            {techStack.map((language) => (
              <div key={language.name} className="flex flex-col items-center justify-center">
                <Image
                  src={language.src}
                  alt={language.name}
                  width={100}
                  height={170}
                  objectFit='contain'

                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechStack
