import { Carousel } from "antd";

const AppCarousel = () => {

    const content = [
        {
            key: 1,
            url : 'https://images.unsplash.com/photo-1633879815563-3e4d7f2ba3a7?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            key: 2,
            url : 'https://images.unsplash.com/photo-1601295437622-e67b121ffb83?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            key: 3,
            url : 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            key: 4,
            url : 'https://images.unsplash.com/photo-1564644411594-c9a40e2aa4da?q=80&w=2040&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }

    ]
    return (
        <Carousel autoplay className="mx-20 mt-10">
            {content.map(url => (
                <div className="h-[400px] w-full" key={url.key}>
                    <img src={url.url} className="w-full"/>
                </div>
            ))}
        </Carousel>

    )
}

export default AppCarousel;