import { useState } from 'react'
import { Tab } from '@headlessui/react';
import styles from '../styles/Course.module.css'
import localFont from 'next/font/local'


const lato = localFont({
  src: [
    {
      path: '../../public/fonts/lato/Lato-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/lato/Lato-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
});

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Catalog() {
  let [categories] = useState({
    "AUR30620 Certificate III in Light Vehicle Mechanical Technology": [
      {
        id: 1,
        title: 'AUR30620 Certificate III in Light Vehicle Mechanical Technology',
        coreContent: [
          {
            unit: "AURAEA002",
            desc: "Follow environmental and sustainability best practice in an automotive workplace"
        },
        {
            unit: "AURASA102",
            desc: "Follow safe working practices in an automotive workplace"
        },
        {
            unit: "AURETR112",
            desc: "Test and repair basic electrical circuits"
        },
        {
            unit: "AURETR123",
            desc: "Diagnose and repair spark ignition engine management systems"
        },
        {
            unit: "AURETR125",
            desc: "Test, charge and replace batteries and jumpstart vehicles"
        },
        {
            unit: "AURETR129",
            desc: "Diagnose and repair charging systems"
        },
        {
            unit: "AURETR130",
            desc: "Diagnose and repair starting systems"
        },
        {
            unit: "AURETR131",
            desc: "Diagnose and repair ignition systems"
        },
        {
            unit: "AURLTB103",
            desc: "Diagnose and repair light vehicle hydraulic braking systems"
        },
        {
            unit: "AURLTD104",
            desc: "Diagnose and repair light vehicle steering systems"
        },
        {
            unit: "AURLTD105",
            desc: "Diagnose and repair light vehicle suspension systems"
        },
        {
            unit: "AURLTE102",
            desc: "Diagnose and repair light vehicle engines"
        },
        {
            unit: "AURLTZ101",
            desc: "Diagnose and repair light vehicle emission control systems"
        },
        {
            unit: "AURTTA104",
            desc: "Carry out servicing operations"
        },
        {
            unit: "AURTTA118",
            desc: "Develop and carry out diagnostic test strategies"
        },
        {
            unit: "AURTTB101",
            desc: "Inspect and service braking systems"
        },
        {
            unit: "AURTTC103",
            desc: "Diagnose and repair cooling systems"
        },
        {
            unit: "AURTTE104",
            desc: "Inspect and service engines"
        },
        {
            unit: "AURTTF101",
            desc: "Inspect and service petrol fuel systems"
        },
        {
            unit: "AURTTK102",
            desc: "Use and maintain tools and equipment in an automotive workplace"
        },
        ],
        electiveGrpA: [
          {
            unit: "AURACA101",
            desc: "Respond to customer needs and enquiries in an automotive workplace"
        },
        {
            unit: "AURAFA103",
            desc: "Respond to customer needs and enquiries in an automotive workplace"
        },
        {
            unit: "AURETH011",
            desc: "Depower and reinitialise hybrid electric vehicles"
        },
        {
            unit: "AURETR010",
            desc: "Repair wiring harnesses and looms"
        },
        {
            unit: "AURETR028",
            desc: "Diagnose and repair instruments and warning systems"
        },
        {
            unit: "AURETR032",
            desc: "Diagnose and repair automotive electrical systems"
        },
        {
            unit: "AURETR143",
            desc: "Diagnose and repair electronic body management systems"
        },
        {
            unit: "AURLTJ011",
            desc: "Select light vehicle wheels and tyres"
        },
        {
            unit: "AURLTJ102",
            desc: "Remove, inspect, repair and refit light vehicle tyres and tubes"
        },
        {
            unit: "AURLTJ113",
            desc: "Remove, inspect and refit light vehicle wheel and tyre assemblies"
        },
        {
            unit: "AURLTQ101",
            desc: "Diagnose and repair light vehicle final drive assemblies"
        },
        {
            unit: "AURLTQ102",
            desc: "Diagnose and repair light vehicle drive shafts"
        },
        {
            unit: "AURLTX101",
            desc: "Respond to customer needs and enquiries in an automotive workplace"
        },
        {
            unit: "AURLTX102",
            desc: "Diagnose and repair light vehicle automatic transmissions"
        },
        {
            unit: "AURLTX103",
            desc: "Diagnose and repair light vehicle clutch systems"
        },
        {
            unit: "AURTTA017",
            desc: "Carry out vehicle safety inspections"
        },
        {
            unit: "AURTTA105",
            desc: "Select and use bearings, seals, gaskets, sealants and adhesives"
        },
        {
            unit: "AURTTC001",
            desc: "Inspect and service cooling systems"
        },
        {
            unit: "AURTTD002",
            desc: "Inspect and service steering systems"
        },
        {
            unit: "AURTTD004",
            desc: "Inspect and service suspension systems"
        },
        {
            unit: "AURTTF102",
            desc: "Inspect and service diesel fuel injection systems"
        },
        {
            unit: "AURTTF105",
            desc: "Diagnose and repair engine forcedinduction systems"
        },
        {
            unit: "AURTTJ011",
            desc: "Balance wheels and tyres"
        },
        {
            unit: "AURTTK001",
            desc: "Use and maintain measuring equipment in an automotive workplace"
        },
        {
            unit: "AURTTQ001",
            desc: "Inspect and service final drive assemblies"
        },
        {
            unit: "AURTTQ003",
            desc: "Inspect and service drive shafts"
        },
        {
            unit: "AURTTX102",
            desc: "Inspect and service manual transmissions"
        },
        {
            unit: "AAURTTX103",
            desc: "Inspect and service automatic transmissions"
        },
        {
            unit: "AURACA101",
            desc: "Respond to customer needs and enquiries in an automotive workplace"
        },
        {
            unit: "AURTTZ002",
            desc: "Diagnose and repair exhaust systems"
        },
        {
            unit: "AURTTB015",
            desc: "Assemble and fit braking system components"
        },
        {
            unit: "AURETR011",
            desc: "Install basic ancillary electrical systems and components"
        },
        ],
        electiveGrpB: null,
      }
    ],
    "AUR40216 Certificate IV in Automotive Mechanical Diagnosis": [
      {
        id: 2,
        title: 'AUR40216 Certificate IV in Automotive Mechanical Diagnosis',
        coreContent: [
          {
            unit: "AURTTA021",
            desc: "Diagnose complex system faults",
          },

        ],
        electiveGrpA: [
          {
            unit: "AURETR037",
            desc: "Diagnose complex faults in light vehicle safety systems"
        },
        {
            unit: "AURLTB104",
            desc: "Diagnose complex faults in light vehicle braking systems"
        },
        {
            unit: "AURLTD109",
            desc: "Diagnose complex faults in light vehicle steering and suspension systems"
        },
        {
            unit: "AURLTE104",
            desc: "Diagnose complex faults in light vehicle petrol engines"
        },
        {
            unit: "AURLTE105",
            desc: "Diagnose complex faults in light vehicle diesel engines"
        },
        {
            unit: "AURLTX104",
            desc: "Diagnose complex faults in light vehicle automatic transmission and driveline systems"
        },
        {
            unit: "AURTTA125",
            desc: "Diagnose complex faults in vehicle integrated stability control systems"
        },
        {
            unit: "AURTTR101",
            desc: "Diagnose complex faults in engine management systems"
        },
        ],
        electiveGrpB: null
      }
    ],
    "AUR50216 Diploma of Automotive Technology": [
      {
        id: 3,
        title: 'AUR50216 Diploma of Automotive Technology',
        coreContent: [
          {
            unit: "CPCCCM2006",
            desc: "Apply basic levelling procedures",
          },
          {
            unit: "CPCCOM1012",
            desc: "Work effectively and sustainably in the construction industry",
          },
          {
            unit: "CPCCOM1013",
            desc: "Plan and organise work",
          },
          {
            unit: "CPCCOM1014",
            desc: "Conduct workplace communication",
          },
          {
            unit: "CPCCOM1015",
            desc: "Carry out measurements and calculations",
          },
          {
            unit: "CPCCOM2001",
            desc: "Read and interpret plans and specifications",
          },
          {
            unit: "CPCCWF2001",
            desc: "WFT Handle wall and floor tiling materials – WFT",
          },
          {
            unit: "CPCCWF2002",
            desc: "WFT Use wall and floor tiling tools and equipment – WFT",
          },
          {
            unit: "CPCCWF3001",
            desc: "WFT Prepare surfaces for tiling application – WFT",
          },
          {
            unit: "CPCCWF3002",
            desc: "WFT Install floor tiles – WFT",
          },
          {
            unit: "CPCCWF3003",
            desc: "WFT Install wall tiles – WFT",
          },
          {
            unit: "CPCCWF3004",
            desc: "Repair wall and floor tiling – WFT (Preorder)",
          },
          {
            unit: "CPCCWF3005",
            desc: "Install decorative tiling – WFT (Preorder)",
          },
          {
            unit: "CPCCWF3006",
            desc: "Install mosaic tiling – WFT (Preorder)",
          },
          {
            unit: "CPCCWF3007",
            desc: "Tile curved surfaces – WFT (Preorder)",
          },
          {
            unit: "CPCCWF3009",
            desc: "Apply waterproofing for wall and floor tiling – WFT (Preorder)",
          },
          {
            unit: "CPCCWHS2001",
            desc: "Apply WHS requirements, policies and procedures in the construction industry",
          },
        ],
        electiveGrpA: [
          {
            unit: "BSBESB301",
            desc: "Investigate business opportunities"
          },
          {
            unit: "BSBESB407",
            desc: "Manage finances for new business ventures (Preorder)"
          },
          {
            unit: "CPCCCM2008",
            desc: "Erect and dismantle restricted height scaffolding"
          },
          {
            unit: "CPCCCM2009",
            desc: "Carry out basic demolition"
          },
          {
            unit: "CPCCCM2012",
            desc: "Work safely at heights"
          },
          {
            unit: "CPCCCM3001",
            desc: "Operate elevated work platforms up to 11 metres (Preorder)"
          },
          {
            unit: "CPCCCO2013",
            desc: "Carry out concreting to simple forms"
          },
        ],
        electiveGrpB: null
      }
    ],
    "AUR50116 Diploma of Automotive Management": [
      {
        id: 3,
        title: 'AUR50116 Diploma of Automotive Management',
        coreContent: [
          {
            unit: "CPCCBL2001",
            desc: "BL Handle and prepare bricklaying and blocklaying materials – BL"
          },
          {
            unit: "CPCCBL2002",
            desc: "BL Use bricklaying and blocklaying tools and equipment – BL"
          },
          {
            unit: "CPCCBL3002",
            desc: "Carry out masonry veneer construction – BL (Preorder)"
          },
          {
            unit: "CPCCBL3003",
            desc: "Carry out cavity brick construction – BL (Preorder)"
          },
          {
            unit: "CPCCBL3005",
            desc: "Lay masonry walls and corners – BL (Preorder)"
          },
          {
            unit: "CPCCBL3006",
            desc: "Lay multithickness walls and piers – BL (Preorder)"
          },
          {
            unit: "CPCCBL3009",
            desc: "Install flashings and damp proof course – BL (Preorder)"
          },
          {
            unit: "CPCCBL3010",
            desc: "Construct masonry arches – BL (Preorder)"
          },
          {
            unit: "CPCCBL3011",
            desc: "Construct curved walls – BL (Preorder)"
          },
          {
            unit: "CPCCBL3013",
            desc: "Construct masonry structural systems – BL (Preorder)"
          },
          {
            unit: "CPCCCA3002",
            desc: "Carry out setting out"
          },
          {
            unit: "CPCCCM2006",
            desc: "Apply basic levelling procedures"
          },
          {
            unit: "CPCCCM2008",
            desc: "Erect and dismantle restricted height scaffolding"
          },
          {
            unit: "CPCCCM2012",
            desc: "Work safely at heights"
          },
          {
            unit: "CPCCOM1012",
            desc: "Work effectively and sustainably in the construction industry"
          },
          {
            unit: "CPCCOM1013",
            desc: "Plan and organise work"
          },
          {
            unit: "CPCCOM1014",
            desc: "Conduct workplace communication"
          },
          {
            unit: "CPCCOM1015",
            desc: "Carry out measurements and calculations"
          },
          {
            unit: "CPCCOM2001",
            desc: "Read and interpret plans and specifications"
          },
          {
            unit: "CPCCWHS2001",
            desc: "Apply WHS requirements, policies and procedures in the construction industry"
          },
        ],
        electiveGrpA: [
          {
            unit: "AHCLS307",
            desc: "Implement a retaining wall project – BL (Preorder)"
          },
          {
            unit: "CPCCBC4003",
            desc: "Select, prepare and administer a construction contract"
          },
          {
            unit: "CPCCBL3001",
            desc: "Lay paving – BL (Preorder)"
          },
          {
            unit: "CPCCBL3016",
            desc: "Construct battered masonry walls and piers – BL (Preorder)"
          },
          {
            unit: "CPCCBL3017",
            desc: "Carry out tuck pointing and repointing to masonry – BL (Preorder)"
          },
          {
            unit: "CPCCCM2009",
            desc: "Carry out basic demolition"
          },
          {
            unit: "CPCCCO2013",
            desc: "Carry out concreting to simple forms"
          },
          {
            unit: "CPCCSF2004",
            desc: "Place and fix reinforcement materials"
          },
        ],
        electiveGrpB: null
      }
    ]
  })

  return (
    <div className="container-fluid">
      <div className={`${styles.coursebanner}`}>
        <h2 className={`${styles.bannerTitle} pl-5 ${lato.className}`}>
          AUR-Automotive Retail , Service & Repair Training Package
        </h2>
      </div>
      <div className='flex justify-start'>
        <Tab.Group vertical={true}>
          <Tab.List className={`${styles.tabList} space-x-1`}>
            <div className=''>
              {Object.keys(categories).map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      `pl-5 text-left w-full py-5 text-md font-medium leading-5 tracking-normal text-black ${lato.className}`,
                      'hover:cursor-pointer  focus:outline-none',
                      selected
                        ? `${styles.activeTab} shadow text-white`
                        : 'text-black/80 hover:bg-gray-300/20'
                    )
                  }
                >
                  {category}
                </Tab>
              ))}
            </div>
          </Tab.List>
          <Tab.Panels className={`${styles.tabPanel}`}>
            {Object.values(categories).map((posts, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  ' bg-white p-3',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                )}
              >
                <div>
                  {posts.map((post) => (
                    <div
                      key={post.id}
                      className="relative"
                    >
                      <h3 className={`${styles.catTitle} ${lato.className}`}>{post.title}</h3>
                      <table className="min-w-full divide-y divide-gray-200 mb-5">
                        <thead>
                          <tr>
                            <th className={`text-xl text-left font-medium leading-5 ${lato.className} ${styles.tableHead}`} style={{
                            }}>Core Units</th>
                          </tr>
                        </thead>
                        <tbody>
                          {Object.values(post.coreContent).map((list, idx: any, row: any) => (

                            <tr key={idx}>
                              <td className='py-2 pl-2 hover:bg-gray-100' style={{
                                borderTopWidth: 1,
                                paddingBottom: (row.length - 1) == idx ? 30 : 0
                              }}>
                                <h3 className={`${lato.className} ${styles.unitHeading} `}>{list.unit}</h3>
                                <p className={`${lato.className} ${styles.unitDesc} text-slate-700`}>{list.desc}</p>
                              </td>
                            </tr>

                          ))}
                          {post.electiveGrpA ?
                            <>
                              <tr className=''>
                                <th className={`text-xl text-left font-medium leading-5 ${styles.new} ${lato.className} ${styles.tableHead}`}>Elective Units</th>
                              </tr>
                              {Object.values(post.electiveGrpA).map((list, idx) => (
                                <tr key={idx}>
                                  <td className='py-2 pl-2 hover:bg-gray-100' style={{
                                    borderTopWidth: 1
                                  }}>
                                    <h3 className={`${lato.className} ${styles.unitHeading} `}>{list.unit}</h3>
                                    <p className={`${lato.className} ${styles.unitDesc} text-slate-700`}>{list.desc}</p>
                                  </td>
                                </tr>
                              ))
                              }
                            </>
                            : null
                          }

                        </tbody>
                      </table>
                    </div>
                  ))}
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div >
    </div >
  )
}
