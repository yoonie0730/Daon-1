export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="bg-white border-b shadow-sm p-4">
        <h1 className="text-2xl font-bold text-blue-900">다온</h1>
      </header>

      <main className="p-6 grid gap-6">
        <div className="rounded-2xl shadow-md p-6 border">
          <h2 className="text-xl font-semibold text-royal-blue mb-2">About Us</h2>
          <p>
            저희 회사는 모던한 디자인과 실용성을 겸비한 디지털 솔루션을
            제공합니다. 창의성과 효율성을 바탕으로 사용자 중심의 결과물을
            만듭니다.
          </p>
        </div>

        <div className="rounded-2xl shadow-md p-6 border">
          <h2 className="text-xl font-semibold text-royal-blue mb-2">Contact</h2>
          <p>Email: daon@gmail.com</p>
          <p>Phone: 010-5815-7003</p>
        </div>

        <div className="rounded-2xl shadow-md p-6 border grid grid-cols-2 gap-4">
          <h2 className="col-span-2 text-xl font-semibold text-royal-blue">Gallery</h2>
          <img src="/images/sample1.jpg" alt="sample1" className="rounded-xl" />
          <img src="/images/sample2.jpg" alt="sample2" className="rounded-xl" />
        </div>
      </main>

      <footer className="p-4 text-center text-sm text-gray-500 border-t">
        © 2025 다온. All rights reserved.
      </footer>
    </div>
  );
}
