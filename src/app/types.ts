import { StaticImageData } from "next/image"

export interface IWithClass {
  className?: string
}

export interface ILink {
  href: string
  text?: string
}

export interface IListItem extends IWithClass{
  image: string | StaticImageData
  firstString: string
  secondString?: string 
}