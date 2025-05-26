

const Footer = () => {
  return (
    <footer>
        <div className="bg-blue-600 h-16 flex items-center justify-center">
            <p className="text-center text-white">
                &copy; { new Date().getFullYear() }
            </p>
        </div>
    </footer>
  )
}

export default Footer