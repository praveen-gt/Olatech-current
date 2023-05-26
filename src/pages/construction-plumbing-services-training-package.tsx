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
    "CPC30620 Certificate III in Painting and Decorating": [
      {
        id: 1,
        title: 'CPC30620 Certificate III in Painting and Decorating',
        coreContent: [
          {
            unit: 'CPCCCM2012',
            desc: 'Work safely at heights – PD (Available)'
          },
          {
            unit: 'CPCCCM3001',
            desc: 'Work safely at heights – PD (Available)'
          },
          {
            unit: "CPCCCM3005",
            desc: "Calculate costs of construction work – PD (Available)"
          },
          {
            unit: "CPCCOM1012",
            desc: "Work effectively and sustainably in the construction industry – PD (Available)"
          },
          {
            unit: "CPCCOM1013",
            desc: "Plan and organise work – PD (Available)"
          },
          {
            unit: "CPCCOM1014",
            desc: "Conduct workplace communication – PD (Available)"
          },
          {
            unit: "CPCCCM2008",
            desc: "Erect and dismantle restricted height scaffolding – PD (Available)"
          },
          {
            unit: "CPCCOM1015",
            desc: "Carry out measurements and calculations – PD (Available)"
          },
          {
            unit: "CPCCOM2001",
            desc: "Read and interpret plans and specifications – PD (Available)"
          },
          {
            unit: "CPCCPB3026",
            desc: "Erect and maintain trestle and plank systems – PD (Preorder)"
          },
          {
            unit: "CPCCPD2011",
            desc: "PD Handle and store painting and decorating materials – PD"
          },
          {
            unit: "CPCCPD2012",
            desc: "Use painting and decorating tools and equipment – PD (Available)"
          },
          {
            unit: "CPCCPD3021",
            desc: "PD Prepare existing coated surface for painting – PD"
          },
          {
            unit: "CPCCPD3023",
            desc: "Apply texture coat paint finishes by brush, roller and spray – PD (Available)"
          },
          {
            unit: "CPCCPD3022",
            desc: "PD Apply paint by brush and roller – PD"
          },
          {
            unit: "CPCCPD2013",
            desc: "Remove and replace doors and door and window components – PD (Available)"
          },
          {
            unit: "CPCCPD3024",
            desc: "Apply paint by spray – PD (Preorder)"
          },
          {
            unit: "CPCCPD3025",
            desc: "Match specific paint colours – PD (Preorder)"
          },
          {
            unit: "CPCCPD3026",
            desc: "Apply stains and clear timber finishes – PD (Available)"
          },
          {
            unit: "CPCCPD3027",
            desc: "Remove and apply wallpaper – PD (Preorder)"
          },
          {
            unit: "CPCCPD3028",
            desc: "Apply decorative paint finishes – PD (Available)"
          },
          {
            unit: "CPCCPD3030",
            desc: "Apply protective paint coating systems – PD (Preorder)"
          },
          {
            unit: "CPCCPD3031",
            desc: "Work safely with leadpainted surfaces in the painting industry – PD (Preorder)"
          },
          {
            unit: "CPCCPD3035",
            desc: "Prepare uncoated surfaces for painting – PD (Available)"
          },
          {
            unit: "CPCCPD3036",
            desc: "Work safely to encapsulate nonfriable asbestos in the painting industry – PD (Preorder)"
          },
          {
            unit: "CPCCWHS2001",
            desc: "Apply WHS requirements, policies and procedures in the construction industry – PD (Available)"
          },
        ],
        electiveGrpA: [
          {
            unit: "CPCCPD3029",
            desc: "Remove graffiti and apply antigraffiti coatings – PD (Preorder)"
          },
          {
            unit: "CPCCPD3032",
            desc: "Apply advanced wall coverings – PD (Preorder)"
          },
          {
            unit: "CPCCPD3034",
            desc: "Apply advanced decorative paint finishes – PD (Preorder)"
          },
        ],
        electiveGrpB: [
          {
            unit: "CPCCPD3029",
            desc: "Remove graffiti and apply antigraffiti coatings – PD (Preorder)"
          },
          {
            unit: "CPCCPD3032",
            desc: "Apply advanced wall coverings – PD (Preorder)"
          },
          {
            unit: "CPCCPD3034",
            desc: "Apply advanced decorative paint finishes – PD (Preorder)"
          },
        ],
      }
    ],
    "CPC30220 Certificate III in Carpentry": [
      {
        id: 2,
        title: 'CPC30220 Certificate III in Carpentry',
        coreContent: [
          {
            unit: "CPCCOM1014",
            desc: "Conduct workplace communication",
          },
          {
            unit: "CPCCOM1015",
            desc: "Carry out measurements and calculations",
          },
          {
            unit: "CPCCCM2006",
            desc: "Apply basic levelling procedures",
          },
          {
            unit: "CPCCCM2012",
            desc: "Work safely at heights",
          },
          {
            unit: "CPCCCO2013",
            desc: "Carry out concreting to simple forms",
          },
          {
            unit: "CPCCOM1012",
            desc: "Work effectively and sustainably in the construction industry",
          },
          {
            unit: "CPCCWHS2001",
            desc: "Apply WHS requirements, policies and procedures in the construction industry",
          },
          {
            unit: "CPCCCM2008",
            desc: "Erect and dismantle restricted height scaffolding",
          },
          {
            unit: "CPCCCA2002",
            desc: "Use carpentry tools and equipment",
          },
          {
            unit: "CPCCCA2011",
            desc: "Handle carpentry materials",
          },
          {
            unit: "CPCCCA3004",
            desc: "Construct and erect wall frames",
          },
          {
            unit: "CPCCCA3003",
            desc: "Install flooring systems",
          },
          {
            unit: "CPCCCA3002",
            desc: "Carry out setting out",
          },
          {
            unit: "CPCCCA3001",
            desc: "Carry out general demolition of minor building structures",
          },
          {
            unit: "CPCCCA3005",
            desc: "Construct ceiling frames",
          },
          {
            unit: "CPCCCA3006",
            desc: "Erect roof trusses",
          },
          {
            unit: "CPCCCA3007",
            desc: "Construct pitched roofs",
          },
          {
            unit: "CPCCCA3008",
            desc: "Construct eaves",
          },
          {
            unit: "CPCCCA3010",
            desc: "Install windows and doors",
          },
          {
            unit: "CPCCCA3016",
            desc: "Construct, assemble and install timber external stairs",
          },
          {
            unit: "CPCCCA3017",
            desc: "Install exterior cladding",
          },
          {
            unit: "CPCCCA3024",
            desc: "Install lining, panelling and moulding",
          },
          {
            unit: "CPCCCA3025",
            desc: "Read and interpret plans, specifications and drawings for carpentry work",
          },
          {
            unit: "CPCCCA3028",
            desc: "Erect and dismantle formwork for footings and slabs on ground",
          },
          {
            unit: "CPCCOM3001",
            desc: "Perform construction calculations to determine carpentry material requirements",
          },
          {
            unit: "CPCCOM3006",
            desc: "Carry out levelling operations",
          },
          {
            unit: "CPCWHS3001",
            desc: "Identify construction work hazards and select risk control strategies",
          },
        ],
        electiveGrpA: null,
        electiveGrpB: null
      }
    ],
    "CPC31320 Certificate III in Wall and Floor Tiling": [
      {
        id: 3,
        title: 'CPC31320 Certificate III in Wall and Floor Tiling',
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
    "CPC33020 Certificate III in Bricklaying and Blocklaying": [
      {
        id: 3,
        title: 'CPC33020 Certificate III in Bricklaying and Blocklaying',
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
    ],
    "CPC50220 Diploma of Building and Construction": [
      {
        id: 3,
        title: 'CPC50220 Diploma of Building and Construction',
        coreContent: [
          {
            unit: "BSBOPS504",
            desc: "Manage business risk"
          },
          {
            unit: "BSBWHS513",
            desc: "Lead WHS risk management"
          },
          {
            unit: "CPCCBC4001",
            desc: "Apply building codes and standards to the construction process for Class 1 and 10 Buildings"
          },
          {
            unit: "CPCCBC4003",
            desc: "Select, prepare and administer a construction contract"
          },
          {
            unit: "CPCCBC4004",
            desc: "Identify and produce estimated costs for building and construction projects (Preorder)"
          },
          {
            unit: "CPCCBC4005",
            desc: "Produce labour and material schedules for ordering"
          },
          {
            unit: "CPCCBC4008",
            desc: "Supervise site communication and administration processes for building and construction projects"
          },
          {
            unit: "CPCCBC4009",
            desc: "Apply legal requirements to building and construction projects"
          },
          {
            unit: "CPCCBC4010",
            desc: "Apply structural principles to residential and commercial constructions"
          },
          {
            unit: "CPCCBC4012",
            desc: "Read and interpret plans and specifications"
          },
          {
            unit: "CPCCBC4013",
            desc: "Prepare and evaluate tender documentation"
          },
          {
            unit: "CPCCBC4014",
            desc: "Prepare simple building sketches and drawings"
          },
          {
            unit: "CPCCBC4018",
            desc: "Apply site surveys and setout procedures to building and construction projects"
          },
          {
            unit: "CPCCBC4053",
            desc: "Apply building codes and standards to the construction process for Class 2 to 9, Type C Buildings"
          },
          {
            unit: "CPCCBC5001",
            desc: "Apply building codes and standards to the construction process for Type B construction"
          },
          {
            unit: "CPCCBC5002",
            desc: "Monitor costing systems on complex building and construction projects (Preorder)"
          },
          {
            unit: "CPCCBC5003",
            desc: "Supervise the planning of onsite building and construction work (Preorder)"
          },
          {
            unit: "CPCCBC5005",
            desc: "Select and manage building and construction contractors (Preorder)"
          },
          {
            unit: "CPCCBC5007",
            desc: "Administer the legal obligations of a building and construction contractor (Preorder)"
          },
          {
            unit: "CPCCBC5010",
            desc: "Manage construction work (Preorder)"
          },
          {
            unit: "CPCCBC5011",
            desc: "Manage environmental management practices and processes in building and construction (Preorder)"
          },
          {
            unit: "CPCCBC5013",
            desc: "Manage professional technical and legal reports on building and construction projects (Preorder)"
          },
          {
            unit: "CPCCBC5018",
            desc: "Apply structural principles to the construction of buildings up to 3 storeys (Preorder)"
          },
          {
            unit: "CPCCBC5019",
            desc: "Manage building and construction business finances (Preorder)"
          },
        ],
        electiveGrpA: [
          {
            unit: "BSBPMG532",
            desc: "Manage project quality"
          },
          {
            unit: "BSBPMG538",
            desc: "Manage project stakeholder engagement"
          },
          {
            unit: "CPCCBC4026",
            desc: "Arrange building applications and approvals (Preorder)"
          },
          {
            unit: "CPCCBC4052",
            desc: "Lead and manage teams in the building and construction industry"
          },
          {
            unit: "CPCCBC5012",
            desc: "Manage the application and monitoring of energy conservation and management (Preorder)"
          },
        ],
        electiveGrpB: null
      }
    ],
    "CPC40120 Certificate IV in Building and Construction": [
      {
        id: 3,
        title: 'CPC40120 Certificate IV in Building and Construction',
        coreContent: [
          {
            unit: "CPCCOM1014",
            desc: "Conduct workplace communication"
          },
          {
            unit: "CPCCOM1015",
            desc: "Carry out measurements and calculations"
          },
          {
            unit: "CPCCCM2006",
            desc: "Apply basic levelling procedures"
          },
          {
            unit: "CPCCCM2012",
            desc: "Work safely at heights"
          },
          {
            unit: "CPCCCO2013",
            desc: "Carry out concreting to simple forms"
          },
          {
            unit: "CPCCOM1012",
            desc: "Work effectively and sustainably in the construction industry"
          },
          {
            unit: "CPCCWHS2001",
            desc: "Apply WHS requirements, policies and procedures in the construction industry"
          },
          {
            unit: "CPCCCM2008",
            desc: "Erect and dismantle restricted height scaffolding"
          },
          {
            unit: "CPCCCA2002",
            desc: "Use carpentry tools and equipment"
          },
          {
            unit: "CPCCCA2011",
            desc: "Handle carpentry materials"
          },
          {
            unit: "CPCCCA3004",
            desc: "Construct and erect wall frames"
          },
          {
            unit: "CPCCCA3003",
            desc: "Install flooring systems"
          },
          {
            unit: "CPCCCA3002",
            desc: "Carry out setting out"
          },
          {
            unit: "CPCCCA3001",
            desc: "Carry out general demolition of minor building structures"
          },
          {
            unit: "CPCCCA3005",
            desc: "Construct ceiling frames"
          },
          {
            unit: "CPCCCA3006",
            desc: "Erect roof trusses"
          },
          {
            unit: "CPCCCA3007",
            desc: "Construct pitched roofs"
          },
          {
            unit: "CPCCCA3008",
            desc: "Construct eaves"
          },
          {
            unit: "CPCCCA3010",
            desc: "Install windows and doors"
          },
          {
            unit: "CPCCCA3016",
            desc: "Construct, assemble and install timber external stairs"
          },
          {
            unit: "CPCCCA3017",
            desc: "Install exterior cladding"
          },
          {
            unit: "CPCCCA3024",
            desc: "Install lining, panelling and moulding"
          },
          {
            unit: "CPCCCA3025",
            desc: "Read and interpret plans, specifications and drawings for carpentry work"
          },
          {
            unit: "CPCCCA3028",
            desc: "Erect and dismantle formwork for footings and slabs on ground"
          },
          {
            unit: "CPCCOM3001",
            desc: "Perform construction calculations to determine carpentry material requirements"
          },
          {
            unit: "CPCCOM3006",
            desc: "Carry out levelling operations"
          },
          {
            unit: "CPCWHS3001",
            desc: "Identify construction work hazards and select risk control strategies"
          },
        ],
        electiveGrpA: [
          {
            unit: "CPCCCM2002",
            desc: "Carry out hand excavation"
          },
          {
            unit: "CPCCSF2004",
            desc: "Place and fix reinforcement materials"
          },
          {
            unit: "CPCCCA3012",
            desc: "Frame and fit wet area fixtures"
          },
          {
            unit: "CPCCCA3014",
            desc: "Construct and install bulkheads"
          },
          {
            unit: "CPCCCM3001",
            desc: "Operate elevated work platforms up to 11 metres (Preorder)"
          },
          {
            unit: "CPCCJN3003",
            desc: "Manufacture components for doors, windows and frames"
          },
        ],
        electiveGrpB: null
      }
    ],
  })

  return (
    <div className="container-fluid">
      <div className={`${styles.coursebanner}`}>
        <h2 className={`${styles.bannerTitle} pl-5 ${lato.className}`}>
          Construction, Plumbing & Services Training Package
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
                          {Object.values(post.coreContent).map((list, idx:any, row:any) => (

                            <tr key={idx}>
                              <td className='py-2 pl-2 hover:bg-gray-100' style={{
                                borderTopWidth: 1,
                                paddingBottom: (row.length -1) == idx ? 30: 0
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
                            : null}


                        </tbody>
                      </table>

                      {/* {post.electiveGrpA ? <>
                        <table className="min-w-full divide-y divide-gray-200">
                          <tbody>
                            <tr className={post.electiveGrpB ? 'flex justify-between' : ""}>
                              <div>
                                <div>
                                  <h3 className={`text-xl font-medium leading-5 ${lato.className} ${styles.tableHead}`}>Elective Units</h3>
                                </div>
                                {
                                  Object.values(post.electiveGrpA).map((list, idx) => (
                                    <div key={idx}>
                                      <div>
                                        <h3 className={`${lato.className} ${styles.unitHeading} `}>{list.unit}</h3>
                                        <p className={`${lato.className} text-slate-700`}>{list.desc}</p>
                                      </div>

                                    </div>
                                  ))
                                }
                              </div>
                              <div>
                                <div>
                                  <h3 className={`text-xl font-medium leading-5 ${lato.className} ${styles.tableHead}`}>Elective Units</h3>
                                </div>
                                {
                                  Object.values(post.electiveGrpA).map((list, idx) => (
                                    <div key={idx}>
                                      <div>
                                        <h3 className={`${lato.className} ${styles.unitHeading} `}>{list.unit}</h3>
                                        <p className={`${lato.className} text-slate-700`}>{list.desc}</p>
                                      </div>

                                    </div>
                                  ))
                                }
                              </div>

                            </tr>
                          </tbody>
                        </table>
                      </> : null} */}

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
