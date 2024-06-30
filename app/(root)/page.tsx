import HeaderBox from "@/components/myUI/HeaderBox";
import RightSideBar from "@/components/myUI/RightSidebar";
import TotalBalanceBox from "@/components/myUI/TotalBalanceBox";
import React from "react";

export default function Home() {
  const loggedIn = {
    firstName: "Adrian",
    lastName: "JSM",
    email: "example@gmail.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
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
