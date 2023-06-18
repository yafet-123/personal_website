import { Suspense } from 'react';
import Image from 'next/image'
import {
	ExhibitionsData,
} from '@/data/exhibitions';
import ExhibitionsDetail from '@/components/ExhibitionsDetail'


export default async function Exhibitions() {
	return(
		<main className="flex flex-col mt-32 px-5 lg:px-10">
        	<h1 className="font-bold text-4xl mb-5">Exhibitions</h1>
        	{ ExhibitionsData?.map((exhibitions,index)=>(
        		<ExhibitionsDetail key={index} exhibitions={exhibitions} />
        	))}
      </main>
	)
}