import HeaderBox from "@/components/myUI/HeaderBox";
import RightSideBar from "@/components/myUI/RightSidebar";
import TotalBalanceBox from "@/components/myUI/TotalBalanceBox";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import React from "react";

export default async function Home() {
  const loggedIn = await getLoggedInUser();
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.name || "Guest"}
            subtext="Access and manage your account and transactions efficiently"
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSideBar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 4500 }, { currentBalance: 3500 }]}
      />
    </section>
  );
}
