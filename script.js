 function easyScroll() {
        const anchors = document.querySelectorAll('a[href*="#"]')

        anchors.forEach(item => {
            item.addEventListener('click', function (e) {
                e.preventDefault()

                const blockID = item.getAttribute('href').substr(1)

                document.getElementById(blockID).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                })
            })

        })
    }


    easyScroll()
