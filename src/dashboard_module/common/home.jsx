/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

const Home = () => {
  const data = [1, 2, 4, 3, 6, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <div>
      <div className="py-4">
        {data.map((datas, index) => (
          <div key={index} className="bg-none border-b p-4 min-w-100 rounded-lg gap-2 mb-5">
            <div className="mb-4">
              <div className="flex flex-row items-center text-center gap-2">
                <div className="w-11 h-11 rounded-full p-0.5 bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500">
                  <div className="h-10 w-10 rounded-full bg-white wrapper overflow-hidden border-2 border-black">
                    <img className="w-full h-full object-contain" src="https://randomuser.me/api/portraits/men/1.jpg" alt="" />
                  </div>
                </div>
                <p className="text-sm font-semibold pb-2 pt-1">Jonnaes</p>
              </div>
              <div></div>
            </div>
            <div>
              <div>
                <img className="w-[100%] dark:border" src="https://picsum.photos/600/400/?random" alt="" />
              </div>
            </div>
            <div>
              <div className="pt-3 pb-2">
                <ul className="text-white text-2xl flex space-x-8">
                  <li>
                    <i className="fa-regular fa-heart cursor-pointer hover:text-gray-300"></i>
                  </li>
                  <li>
                    <i className="fa-regular fa-comments cursor-pointer hover:text-gray-300"></i>
                  </li>
                  <li>
                    <i className="fa-regular fa-paper-plane cursor-pointer hover:text-gray-300"></i>
                  </li>
                  <li>
                    <i className="fa-regular fa-bookmark  cursor-pointer hover:text-gray-300"></i>
                  </li>
                </ul>
              </div>
            </div>
            <div className=" pt-1 pb-2 space-y-1 text-sm">
              <div>
                <p className="font-semibold cursor-pointer">37.103 curtidas</p>
              </div>
              <div>
                <p className="cursor-pointer">Qualquer texto serviria para exemplificar esse post</p>
              </div>
              <div>
                <p className="cursor-pointer">Ver todos os 400 comentários</p>
              </div>
            </div>
            <div className="flex flex-row justify-between py-3 m-2 space-x-3">
              <div className="">
                <p className="text-sm">Adicione um comentário...</p>
              </div>
              {/* <button className="text-blue-400 ml-[264px] font-semibold cursor-pointer">
                Publicar
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home;