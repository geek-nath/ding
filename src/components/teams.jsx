import React from 'react'
import TeamMemberOne from '../assets/images/1.jpg'
import TeamMemberTwo from '../assets/images/2.jpg'
import TeamMemberThree from '../assets/images/3.jpg'
import TeamMemberFour from '../assets/images/4.jpg'
import * as BsIcons from 'react-icons/bs'

const Teams = () => {
  const teamMembersData = [
    { name: "John Doe", role: "Product Manager", image: TeamMemberOne },
    { name: "Steven Adams", role: "Backend Developer", image: TeamMemberTwo },
    { name: "Ja Morant", role: "Frontend Developer", image: TeamMemberThree },
    { name: "Anthony Edwards", role: "Fullstack Developer", image: TeamMemberFour }
  ]
  return (
    <>
      <section className='team'>
        <div className="container">
          <h1 className='text-center text-gray-900 font-bold text-4xl capitalize'>Meet the team</h1>
          <div className="teams_wrap mt-8">
            {teamMembersData.map((data, index) => {
              const { name, role, image } = data;
              return (
                <div className='team_profile_wrap' key={index}>
                  <div className="team_profile_img relative">
                    <img src={image} width={'100%'} alt={name} />
                    <div className="social_links_wrap">
                      <div className="flex gap-3 text-white justify-center">
                        <div className="social_icon_wrap">
                          <BsIcons.BsFacebook />
                        </div>
                        <div className="social_icon_wrap">
                          <BsIcons.BsTwitter />
                        </div>
                        <div className="social_icon_wrap">
                          <BsIcons.BsInstagram />
                        </div>
                        <div className="social_icon_wrap">
                          <BsIcons.BsLinkedin />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-5">
                    <h1 className='text-gray-900 font-bold text-xl'>
                      {name}
                    </h1>
                    <h5 className='text-gray-500 text-sm'>
                      {role}
                    </h5>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Teams