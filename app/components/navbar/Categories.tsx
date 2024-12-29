"use client"

import React from 'react'
import Container from '../Container'
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb'
import { GiBarn, GiBoatFishing, GiCactus, GiCastle, GiCaveEntrance, GiForestCamp, GiIsland, GiWindmill } from 'react-icons/gi'
import { MdOutlineVilla } from 'react-icons/md'
import CategoryBox from '../CategoryBox'
import { usePathname, useSearchParams } from 'next/navigation'
import { FaSkiing } from 'react-icons/fa'
import { BsSnow } from 'react-icons/bs'
import { IoDiamond } from 'react-icons/io5'

export const categories = [
  {
    label: 'Bleach',
    icon: TbBeach,
    description: "This is sea view property"
  },
  {
    label: 'Windmill',
    icon: GiWindmill,
    description: "This is windmill property"
  },
  {
    label: 'Modern',
    icon: MdOutlineVilla,
    description: "This is modern property"
  },
  {
    label: 'Countryside',
    icon: TbMountain,
    description: "This is countryside property"
  },
  {
    label: 'Pools',
    icon: TbPool,
    description: "This is pool property"
  },
  {
    label: 'Islands',
    icon: GiIsland,
    description: "This is island property"
  },
  {
    label: 'Lake',
    icon: GiBoatFishing,
    description: "This is Lake property"
  },
  {
    label: 'Skiing',
    icon: FaSkiing,
    description: "This is Skiing property"
  },
  {
    label: 'Castle',
    icon: GiCastle,
    description: "This is Castle property"
  },
  {
    label: 'Camping',
    icon: GiForestCamp,
    description: "This is Camping property"
  },
  {
    label: 'Arctic',
    icon: BsSnow,
    description: "This is Arctic property"
  },
  {
    label: 'Cabe',
    icon: GiCaveEntrance,
    description: "This is Cave property"
  },
  {
    label: 'Desert',
    icon: GiCactus,
    description: "This is Desert property"
  },
  {
    label: 'Farm',
    icon: GiBarn,
    description: "This is Farm property"
  },
  {
    label: 'Luxuxy',
    icon: IoDiamond,
    description: "This is Luxury property"
  },
]

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category')

  const pathname = usePathname();

  const isMainPage = pathname === '/';

  if(!isMainPage){
    return null
  }

  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
    {
      categories.map((item)=>(
        <CategoryBox key={item.label} label={item.label} selected={category === item.label} icon={item.icon}/>
      ))
    }
      </div>
    </Container>
  )
}

export default Categories