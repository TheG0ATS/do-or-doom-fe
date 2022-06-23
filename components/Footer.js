

export default function Footer({ taskData }) {
    let notCompleted = taskData.filter(item => (item.completed == false));
    let count = notCompleted.length
    return <footer className='fixed inset-x-0 bottom-0 bg-[rgb(21,185,129)] py-6 px-5 text-center '>
        <p>{count} Tasks on your list.</p>
    </footer>
  }