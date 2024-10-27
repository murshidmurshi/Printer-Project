import React, { useEffect, useRef } from 'react'
import './index.css'
import { useState } from 'react'

export default function Index() {
    const elementRef = useRef(null)
    const containerRef = useRef('')
    const contentRef = useRef('')
    // const wrapperRef = useRef('')
    const [innertext, setInnerText] = useState('')
    const [totalwidth, setTotalWidth] = useState(0)
    const [totalpage, setTotalPage] = useState(0)
    const [detail, setDetail] = useState([




      

        {
            sno: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus nisi quod eius debitis blanditiis recusandae vel sunt excepturi rerum beatae!',
            name: 'Kiran',
            age: '21',
            address:'Sajipa',
        },

        
        {
            sno: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus nisi quod eius debitis blanditiis recusandae vel sunt excepturi rerum beatae!',
            name: 'Hemanth',
            age: '20',
            address:'Melkar',
        },
        
        {
            sno: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus nisi quod eius debitis blanditiis recusandae vel sunt excepturi rerum beatae!',
            name: 'Hemanth',
            age: '20',
            address:'Melkar',
        },
        
        {
            sno: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus nisi quod eius debitis blanditiis recusandae vel sunt excepturi rerum beatae!',
            name: 'Hemanth',
            age: '20',
            address:'Melkar',
        },
        {
            sno: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus nisi quod eius debitis blanditiis recusandae vel sunt excepturi rerum beatae!',
            name: 'Hemanth',
            age: '20',
            address:'Melkar',
        },
        
        {
            sno: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus nisi quod eius debitis blanditiis recusandae vel sunt excepturi rerum beatae!',
            name: 'Hemanth',
            age: '20',
            address:'Melkar',
        },
        
        {
            sno: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus nisi quod eius debitis blanditiis recusandae vel sunt excepturi rerum beatae!',
            name: 'Hemanth',
            age: '20',
            address:'Melkar',
        },
        
        {
            sno: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus nisi quod eius debitis blanditiis recusandae vel sunt excepturi rerum beatae!',
            name: 'Hemanth',
            age: '20',
            address:'Melkar',
        },
    ])
    const pageWidth = 320;

    const content = document.getElementById('content')
    let contentVisible = true;
    const button = document.getElementById('btn-content')
    const container = document.getElementById('container')




    useEffect(() => {
        const SCROLLwidth = contentRef.current.scrollWidth;
        const pageWidth = 320;
        setTotalWidth(SCROLLwidth)

        //divide from 2 because who increase the width of page

        setTotalPage(SCROLLwidth / pageWidth / 2)

        if (contentRef.current) {
            const content_innerText = contentRef.current.innerHTML;
            setInnerText(content_innerText)

        }
    }, [totalpage])
    console.log('Total Page', totalpage)
    console.log('TotalWidth', totalwidth)

    useEffect(() => {
        const container = document.getElementById('container')
        // const Totalpage = Math.round(totalpage)
        for (let p = 0; p < totalpage; p++) {
            const header = document.getElementById('header')
            const footer = document.getElementById('footer')

            if (containerRef.current) {
                const pageWidth = 320;
                console.log('Mounted return')
                console.log('Total Page return', p)

                const page = document.createElement('div')
                //  console.log(page, 'Page')
                page.className = 'page';



                    page.style.cssText = `width:${totalwidth}px; transform:translateX(-${p * pageWidth}px) `
                

                if (contentRef.current) {
                    page.innerHTML = contentRef.current.innerHTML;
                }

                // console.log(innertext, 'PARA............')

                const pageClip = document.createElement('div')
                pageClip.className = 'page-clip'

                //footer
                const insideWrappFoot = document.createElement('div')
                insideWrappFoot.className = 'inside-wrap-foot'
                insideWrappFoot.innerHTML = `CopyRight &copy www.printermaster.com `

                //header
                const insideWrappHead = document.createElement('div')
                insideWrappHead.className = 'inside-wrap-head'
                insideWrappHead.innerHTML = 'Print Master'

                //page count

                const pageCount = document.createElement('div')
                pageCount.className = 'page-count'
                pageCount.innerText = 'Page ' + (p + 1) + ' of ' + (Math.round(totalpage))
                /* pageCount.innerHTML = (parseInt(totalpage)) */

                //number
                const phone_number = '+9019836799';
                const phone = document.createElement('div')
                phone.className = 'phone'
                phone.innerText = phone_number


                const page_wrapper = document.createElement('div')
                page_wrapper.className = 'page-wrapper'

                pageClip.appendChild(page)


                page_wrapper.appendChild(pageClip)

                page_wrapper.appendChild(insideWrappHead)
                page_wrapper.appendChild(pageCount)
                page_wrapper.appendChild(phone)
                page_wrapper.appendChild(insideWrappFoot)

                containerRef.current.appendChild(page_wrapper)

            }
        }
    }, [totalpage])

    const ShowHideContent = () => {
        const btn_content_text = document.getElementById('btn-content-text');
        const content = document.getElementById('content')
        contentVisible = !contentVisible;
        content.style.display = contentVisible ? 'block' : 'none';
        btn_content_text.innerText = contentVisible ? 'Hide' : 'Show';
    }

    // For()
    return (
        <>
            <div>
                <button className='btn' onClick={() => ShowHideContent()} id="btn-content"><span id="btn-content-text">Show</span>Orginal</button>

                <button className='btn' onClick={() => window.print()}>Print the Page</button>
            </div>
            <section ref={contentRef} id="content">
                {/*   <h2 id="pgepubid00007"><a id="IV_THE_RABBIT_SENDS_IN_A_LITTLE_BILL"></a>
                    The Rabbit Sends In A Little Bill</h2>
 */}
                {/* <h1 id='header'>Header</h1>
                <h1 id='footer'>Footer</h1> */}
                <table>
                    <thead>
                        <tr>
                            <th>S.no</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            detail.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <th>{item.sno}</th>
                                        <th>{item.name}</th>
                                        <th>{item.age}</th>
                                        <th>{index+1}</th>
                                    </tr>
                                )
                            })
                        }
                    </tbody>

                </table>


            </section>
            <div ref={containerRef} id="container">

            </div>
        </>
    )
}