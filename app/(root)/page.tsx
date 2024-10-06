  import HeaderBox from '@/components/HeaderBox'
  import TotalBalanceBox from '@/components/TotalBalanceBox';
  import RightSidebar from '@/components/RightSidebar';
  const Home = async ({ searchParams: { id, page } }: SearchParamProps) => {
    const loggedIn = {firstName: 'Sathvik', lastName: 'Bhat', email: 'bhatsathvik21@gmail.com'};

    return (
      <section className="home">
        <div className="home-content">
          <header className="home-header">
            <HeaderBox 
              type="greeting"
              title="Welcome"
              user={loggedIn?.firstName || 'Guest'}
              subtext="Access and manage your account and transactions efficiently."
            />
            <TotalBalanceBox
              accounts = {[]}
              totalBanks = {1}
              totalCurrentBalance = {1250.35}
            />

          </header>
          Recent Transcations
        </div>
        <RightSidebar 
          user = {loggedIn}
          transactions = {[]}
          banks = {[{currentBalance: 123.45},{currentBalance: 1234.45}]}

        />
      </section>
    )
  }

  export default Home