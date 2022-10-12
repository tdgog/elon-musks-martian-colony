import Divider from './Divider';

export default function VerticalListElement() {
    return <>
        <div className='w-full h-20 bg-pink-500'>
            <Divider />
            <div className='w-full flex'>
                <p>Text1</p>
                <p>Text2</p>
            </div>
        </div>
    </>
}