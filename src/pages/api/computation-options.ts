// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { OptionsData } from '@/types';

const generateComputationOptionsData = (): OptionsData => {
  return {
    items: [
      {
        id: "ship",
        items: [
          {
            name: 'HMM Helsinki',
            photoUrL: 'https://syroco-hiring-public-assets.s3.eu-west-1.amazonaws.com/react-take-home-exercise/HMM.jpg',
            id: 'hmm_helsinki'
          },
          {
            name: 'MSC Leni',
            photoUrL: 'https://syroco-hiring-public-assets.s3.eu-west-1.amazonaws.com/react-take-home-exercise/MSC_LENI.jpg',
            id: 'msc-leni'
          },
          {
            name: 'CMA CGM Palais Royal',
            photoUrL: 'https://syroco-hiring-public-assets.s3.eu-west-1.amazonaws.com/react-take-home-exercise/CMA_CGM_PALAIS_ROYAL.jpg',
            id: 'cma-cgm-palais-royal'
          },
          {
            name: 'Monaco Maersk',
            photoUrL: 'https://syroco-hiring-public-assets.s3.eu-west-1.amazonaws.com/react-take-home-exercise/MONACO.jpg',
            id: 'monaco-maersk'
          },
          {
            name: 'Ever Glory',
            photoUrL: 'https://syroco-hiring-public-assets.s3.eu-west-1.amazonaws.com/react-take-home-exercise/EVER_GLORY.jpg',
            id: 'ever-glory'
          },
        ],
        name: "Ships"
      },
      {
        id: "maritime-line",
        items: [
          {
            name: 'Eurosal XL',
            photoUrL: 'https://syroco-hiring-public-assets.s3.eu-west-1.amazonaws.com/react-take-home-exercise/eurosal.png',
            id: 'eurosal-xl'
          },
          {
            name: 'Asea Tanzania',
            photoUrL: 'https://syroco-hiring-public-assets.s3.eu-west-1.amazonaws.com/react-take-home-exercise/asea_tanzania.png',
            id: 'asea-tanzania'
          },
          {
            name: 'North Europe French West Indies',
            photoUrL: 'https://syroco-hiring-public-assets.s3.eu-west-1.amazonaws.com/react-take-home-exercise/NEFWI.png',
            id: 'north-europe-french-west-indies'
          },
          {
            name: 'Tanger Med - West Africa',
            photoUrL: 'https://syroco-hiring-public-assets.s3.eu-west-1.amazonaws.com/react-take-home-exercise/TMWA.png',
            id: 'tanger-med-west-africa'
          },
          {
            name: 'North Europe - West Africa',
            photoUrL: 'https://syroco-hiring-public-assets.s3.eu-west-1.amazonaws.com/react-take-home-exercise/NEWA.png',
            id: 'north-europe-west-africa'
          }
        ],
        title: "Maritime Lines"
      },
      {
        id: "wasps",
        items: [
          {
            name: 'Norsepower rotor sail',
            photoUrL: 'https://syroco-hiring-public-assets.s3.eu-west-1.amazonaws.com/react-take-home-exercise/Norsepower.jpg',
            id: 'norsepower-rotor-sail'
          },
          {
            name: 'Michelin Wisamo',
            photoUrL: 'https://syroco-hiring-public-assets.s3.eu-west-1.amazonaws.com/react-take-home-exercise/Wisamo.png',
            id: 'michelin-wisamo'
          },
          {
            name: 'Ayro Oceanwings',
            photoUrL: 'https://syroco-hiring-public-assets.s3.eu-west-1.amazonaws.com/react-take-home-exercise/Oceanwings.jpg',
            id: 'ayro-oceanwings'
          },
          {
            name: 'Beyond the sea Seakite',
            photoUrL: 'https://syroco-hiring-public-assets.s3.eu-west-1.amazonaws.com/react-take-home-exercise/Beyond_The_Sea.jpg',
            id: 'beyond-the-sea-seakite'
          },
          {
            name: 'Aeoldrive Solidsail',
            photoUrL: 'https://syroco-hiring-public-assets.s3.eu-west-1.amazonaws.com/react-take-home-exercise/Aeoldrive.png',
            id: 'aeoldrive-solidsail'
          }
        ],
        name: "Wind propulsion system"
      }
    ],
  }
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<OptionsData>
) {
  res.status(200).json(generateComputationOptionsData())
}
