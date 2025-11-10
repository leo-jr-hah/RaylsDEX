import { useState } from "react";
import {
  ArrowDownUp,
  Shield,
  Building2,
  Users,
  Lock,
  Eye,
  Zap,
  TrendingUp,
} from "lucide-react";
import "./index.css";
import RaylsLogo from "./rayls.jpg";

export default function RaylsDEX() {
  const [activeTab, setActiveTab] = useState("public");
  const [selectedFromToken, setSelectedFromToken] = useState("USDC");
  const [selectedToToken, setSelectedToToken] = useState("BTC");
  const [amount, setAmount] = useState("");
  const [showPrivacyMode, setShowPrivacyMode] = useState(false);

  const publicTokens = [
    {
      symbol: "BTC",
      name: "Bitcoin",
      type: "Crypto",
      liquidity: "$85.6M",
      description:
        "The original cryptocurrency - digital gold for the modern era",
    },
    {
      symbol: "ETH",
      name: "Ethereum",
      type: "Crypto",
      liquidity: "$72.3M",
      description: "Smart contract platform powering DeFi applications",
    },
    {
      symbol: "USDC",
      name: "USD Coin",
      type: "Stablecoin",
      liquidity: "$45.2M",
      description: "1:1 backed by US dollars - stable value for trading",
    },
    {
      symbol: "RAYLS",
      name: "Rayls Token",
      type: "Native",
      liquidity: "$23M",
      description: "Native token of the Rayls ecosystem",
    },
    {
      symbol: "SOL",
      name: "Solana",
      type: "Crypto",
      liquidity: "$36.5M",
      description: "High-performance blockchain for fast transactions",
    },
  ];

  const privateTokens = [
    {
      symbol: "BANK_POOL",
      name: "Institutional Deposit Pool",
      type: "Institutional",
      liquidity: "Hidden",
      description:
        "Bank deposits tokenized for institutional trading - private and compliant",
    },
    {
      symbol: "GOV_TBILL",
      name: "Tokenized Treasury Bills",
      type: "RWA",
      liquidity: "Hidden",
      description:
        "US government treasury bills on blockchain - institutional grade yield",
    },
    {
      symbol: "CORP_BOND",
      name: "Corporate Bond Pool",
      type: "RWA",
      liquidity: "Hidden",
      description: "Corporate bonds from major companies - private settlement",
    },
    {
      symbol: "CBDC_USD",
      name: "CBDC Settlement Pool",
      type: "CBDC",
      liquidity: "Hidden",
      description:
        "Central Bank Digital Currency for instant cross-border settlement",
    },
  ];

  const tokens = activeTab === "public" ? publicTokens : privateTokens;

  return (
    <div
      className="relative min-h-screen overflow-hidden p-4 text-slate-900"
      style={{
        background:
          "radial-gradient(ellipse at bottom, #F5FF3D 0%, #E6E2A4 45%, #C7B8FF 100%)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(160%_80%_at_50%_-20%,rgba(199,184,255,0.7),rgba(245,255,61,0.25),transparent)] opacity-80"
        aria-hidden="true"
      />
      <div className="relative max-w-6xl mx-auto mb-8">
        <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-slate-900 text-[#F5FF3D] shadow-lg shadow-black/20 overflow-hidden">
              <img
                src={RaylsLogo}
                alt="Rayls"
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Rayls DEX</h1>
              <p className="text-sm text-slate-600">Bridging TradFi & DeFi</p>
            </div>
          </div>
          <div className="flex gap-2 text-sm flex-wrap">
            <div className="rounded-full border border-black/5 bg-[#f6ff9f] px-3 py-1 text-slate-900">
              <span className="font-mono">10,247 TPS</span>
            </div>
            <div className="rounded-full border border-black/5 bg-[#dcd0ff] px-3 py-1 text-slate-900">
              KYC Verified
            </div>
          </div>
        </div>

        <div className="mb-6 rounded-2xl border border-white/60 bg-white/70 p-4 shadow-[0_25px_80px_rgba(77,64,153,0.15)] backdrop-blur">
          <div className="flex items-start gap-3">
            <Shield className="mt-0.5 w-5 h-5 flex-shrink-0 text-slate-900" />
            <div>
              <p className="text-sm text-slate-700">
                <strong>Hybrid Architecture:</strong> Trade on the Public Chain
                (transparent, KYC-verified) or Private Network (confidential,
                institutional-grade). Powered by Enygma privacy protocol.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <button
            onClick={() => setActiveTab("public")}
            className={`group relative flex-1 rounded-xl border py-4 px-6 font-semibold transition-all ${
              activeTab === "public"
                ? "border-transparent bg-gradient-to-r from-[#F5FF3D] via-[#E6E2A4] to-[#C7B8FF] text-slate-900 shadow-[0_20px_45px_rgba(31,28,77,0.25)]"
                : "border-white/60 bg-white/40 text-slate-600 hover:bg-white/60"
            }`}
            title="Open to everyone with KYC verification - transparent trading like normal crypto exchanges"
          >
            <div className="flex items-center justify-center gap-2 mb-1">
              <Users className="w-5 h-5" />
              <span>Rayls Public Chain</span>
            </div>
            <p className="text-xs opacity-80">Open to all KYC-verified users</p>
            {activeTab !== "public" && (
              <div className="pointer-events-none absolute top-full left-0 right-0 z-20 mt-2 rounded-lg border border-slate-200 bg-white p-3 opacity-0 shadow-xl transition-opacity group-hover:opacity-100">
                <p className="text-xs text-slate-600">
                  <strong>Public Chain:</strong> Like any crypto exchange - your
                  trades are visible, all users are verified by KYC. Perfect for
                  regular crypto trading and DeFi apps.
                </p>
              </div>
            )}
          </button>
          <button
            onClick={() => setActiveTab("private")}
            className={`group relative flex-1 rounded-xl border py-4 px-6 font-semibold transition-all ${
              activeTab === "private"
                ? "border-transparent bg-gradient-to-r from-[#C7B8FF] via-[#A38BFF] to-[#8B6EFF] text-slate-900 shadow-[0_20px_45px_rgba(63,35,130,0.3)]"
                : "border-white/60 bg-white/40 text-slate-600 hover:bg-white/60"
            }`}
            title="Private network for banks and institutions - confidential trading with compliance built-in"
          >
            <div className="flex items-center justify-center gap-2 mb-1">
              <Building2 className="w-5 h-5" />
              <span>Rayls Private Chain</span>
            </div>
            <p className="text-xs opacity-80">
              Banks & institutions only - fully private
            </p>
            {activeTab !== "private" && (
              <div className="pointer-events-none absolute top-full left-0 right-0 z-20 mt-2 rounded-lg border border-slate-200 bg-white p-3 opacity-0 shadow-xl transition-opacity group-hover:opacity-100">
                <p className="text-xs text-slate-600">
                  <strong>Private Chain:</strong> For banks and big institutions
                  - trades are completely confidential. Think of it like having
                  a private banking network on blockchain.
                </p>
              </div>
            )}
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2 rounded-2xl border border-white/60 bg-white/70 p-6 shadow-[0_35px_80px_rgba(31,24,63,0.2)] backdrop-blur">
            <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
              <h2 className="text-xl font-bold">Swap</h2>
              {activeTab === "private" && (
                <button
                  onClick={() => setShowPrivacyMode(!showPrivacyMode)}
                  className="group relative flex items-center gap-2 rounded-lg bg-[#e9ddff] px-3 py-1.5 text-sm font-medium text-[#3d1f75] shadow-[0_8px_25px_rgba(61,31,117,0.15)]"
                  title={
                    showPrivacyMode
                      ? "Your trade details are encrypted - only you and regulators can see"
                      : "Click to enable privacy mode"
                  }
                >
                  <Lock className="w-4 h-4" />
                  {showPrivacyMode ? "Shielded" : "Privacy Off"}
                  <div className="pointer-events-none absolute top-full right-0 z-20 mt-2 w-64 rounded-lg border border-slate-200 bg-white p-3 opacity-0 shadow-xl transition-opacity group-hover:opacity-100">
                    <p className="text-xs text-slate-600">
                      {showPrivacyMode
                        ? "Shielded Mode: Your orders are encrypted. Competitors can't see your trades. Only regulators can audit if needed."
                        : "Click to enable privacy mode - your trades will be hidden from other users but remain auditable for compliance."}
                    </p>
                  </div>
                </button>
              )}
            </div>

            <div className="mb-4 rounded-xl border border-white/60 bg-white/80 p-4 shadow-inner">
              <div className="mb-2 flex justify-between">
                <span className="text-sm text-slate-600">From</span>
                <span className="text-sm text-slate-600">Balance: 10,000</span>
              </div>
              <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
                <input
                  type="text"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="flex-1 min-w-[120px] bg-transparent text-2xl font-semibold text-slate-900 outline-none"
                />
                <select
                  value={selectedFromToken}
                  onChange={(e) => setSelectedFromToken(e.target.value)}
                  className="cursor-pointer rounded-lg border border-slate-200 bg-white px-4 py-2 font-semibold text-slate-900 outline-none"
                >
                  {tokens.map((token) => (
                    <option key={token.symbol} value={token.symbol}>
                      {token.symbol}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="relative z-10 -my-2 flex justify-center">
              <button className="rounded-lg bg-slate-900 p-2 text-white transition-colors hover:bg-slate-800 shadow-lg">
                <ArrowDownUp className="w-5 h-5" />
              </button>
            </div>

            <div className="mb-6 rounded-xl border border-white/60 bg-white/80 p-4 shadow-inner">
              <div className="mb-2 flex justify-between">
                <span className="text-sm text-slate-600">To</span>
                <span className="text-sm text-slate-600">
                  {activeTab === "private" && showPrivacyMode
                    ? "Balance: Hidden"
                    : "Balance: 5,420"}
                </span>
              </div>
              <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
                <input
                  type="text"
                  placeholder="0.00"
                  value={amount ? (parseFloat(amount) * 0.98).toFixed(2) : ""}
                  readOnly
                  className="flex-1 min-w-[120px] bg-transparent text-2xl font-semibold text-slate-900 outline-none"
                />
                <select
                  value={selectedToToken}
                  onChange={(e) => setSelectedToToken(e.target.value)}
                  className="cursor-pointer rounded-lg border border-slate-200 bg-white px-4 py-2 font-semibold text-slate-900 outline-none"
                >
                  {tokens.map((token) => (
                    <option key={token.symbol} value={token.symbol}>
                      {token.symbol}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {amount && (
              <div className="mb-4 space-y-2 rounded-lg border border-white/60 bg-white/70 p-4 text-sm shadow-inner">
                <div className="flex justify-between">
                  <span className="text-slate-600">Exchange Rate</span>
                  <span className="text-right">
                    1 {selectedFromToken} = 0.98 {selectedToToken}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Fee</span>
                  <span>
                    {activeTab === "private" ? "0.05% (Institutional)" : "0.3%"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Settlement Speed</span>
                  <span className="text-emerald-600">~3 seconds</span>
                </div>
                {activeTab === "private" && (
                  <div className="flex justify-between">
                    <span className="text-slate-600">Privacy Level</span>
                    <span className="flex items-center gap-1 text-[#8B6EFF]">
                      <Shield className="w-4 h-4" />
                      Enygma Protected
                    </span>
                  </div>
                )}
              </div>
            )}

            <button className="w-full rounded-xl bg-gradient-to-r from-[#1E1B4B] via-[#433B94] to-[#7E6BFF] py-4 text-lg font-bold text-white shadow-[0_25px_60px_rgba(34,18,86,0.45)] transition-all hover:brightness-105">
              {activeTab === "private" ? "Execute Private Swap" : "Swap Tokens"}
            </button>

            {activeTab === "private" && (
              <p className="mt-3 text-center text-xs text-slate-600">
                Transaction will be settled via Private Network Hub with
                ZK-proof verification
              </p>
            )}
          </div>

          <div className="rounded-2xl border border-white/60 bg-white/70 p-6 shadow-[0_25px_70px_rgba(31,24,63,0.2)] backdrop-blur">
            <h3 className="mb-4 text-lg font-bold">
              {activeTab === "public" ? "Public Pools" : "Private Pools"}
            </h3>
            <div className="space-y-3">
              {tokens.slice(0, 4).map((token, idx) => (
                <div
                  key={idx}
                  className="group relative cursor-pointer rounded-lg border border-white/60 bg-white/80 p-3 shadow-sm transition-colors hover:border-white"
                  title={token.description}
                >
                  <div className="mb-2 flex items-start justify-between gap-2">
                    <div className="min-w-0 flex-1">
                      <div className="truncate font-semibold">
                        {token.symbol}
                      </div>
                      <div className="truncate text-xs text-slate-600">
                        {token.name}
                      </div>
                    </div>
                    <div
                      className={`flex-shrink-0 rounded px-2 py-0.5 text-xs ${
                        token.type === "RWA"
                          ? "bg-orange-100 text-orange-700"
                          : token.type === "Institutional"
                          ? "bg-purple-100 text-purple-700"
                          : token.type === "CBDC"
                          ? "bg-emerald-100 text-emerald-700"
                          : token.type === "Crypto"
                          ? "bg-cyan-100 text-cyan-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {token.type}
                    </div>
                  </div>

                  {/* Tooltip on hover */}
                  <div className="pointer-events-none absolute left-0 right-0 bottom-full z-20 mb-2 rounded-lg border border-slate-200 bg-white p-3 opacity-0 shadow-xl transition-opacity group-hover:opacity-100">
                    <p className="text-xs text-slate-600">
                      {token.description}
                    </p>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Liquidity</span>
                    <span className="font-mono">
                      {activeTab === "private" && !showPrivacyMode ? (
                        <span className="flex items-center gap-1 text-slate-900">
                          <Eye className="w-3 h-3" />
                          {token.liquidity}
                        </span>
                      ) : (
                        token.liquidity
                      )}
                    </span>
                  </div>
                  <div className="mt-1 flex justify-between text-sm">
                    <span className="text-slate-600">APY</span>
                    <span className="flex items-center gap-1 text-emerald-600">
                      <TrendingUp className="w-3 h-3" />
                      {activeTab === "private" ? "12.4%" : "8.2%"}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {activeTab === "private" && (
              <div className="mt-4 rounded-lg border border-[#d9cffc] bg-[#f3efff] p-3">
                <p className="text-xs text-slate-600">
                  <Lock className="mr-1 inline h-3 w-3" />
                  Institutional pools are privacy-protected. Only authorized
                  participants can view full order books.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          <div className="group relative cursor-pointer rounded-xl border border-white/60 bg-white/70 p-4 shadow-[0_20px_50px_rgba(31,24,63,0.15)] backdrop-blur hover:border-white">
            <Shield className="mb-2 h-8 w-8 text-[#433B94]" />
            <h4 className="font-bold mb-1">Enygma Privacy</h4>
            <p className="text-sm text-slate-600">
              ZK-proof shielded orders with auditable compliance
            </p>
            <div className="pointer-events-none absolute left-0 right-0 bottom-full z-20 mb-2 rounded-lg border border-slate-200 bg-white p-3 opacity-0 shadow-xl transition-opacity group-hover:opacity-100">
              <p className="text-xs text-slate-600">
                <strong>What's this?</strong> Advanced encryption that keeps
                your trades private while letting regulators verify everything
                is legal. Best of both worlds!
              </p>
            </div>
          </div>
          <div className="group relative cursor-pointer rounded-xl border border-white/60 bg-white/70 p-4 shadow-[0_20px_50px_rgba(89,56,145,0.2)] backdrop-blur hover:border-white">
            <Building2 className="mb-2 h-8 w-8 text-[#7E6BFF]" />
            <h4 className="font-bold mb-1">RWA Trading</h4>
            <p className="text-sm text-slate-600">
              Tokenized deposits, treasuries, and real estate
            </p>
            <div className="pointer-events-none absolute left-0 right-0 bottom-full z-20 mb-2 rounded-lg border border-slate-200 bg-white p-3 opacity-0 shadow-xl transition-opacity group-hover:opacity-100">
              <p className="text-xs text-slate-600">
                <strong>RWA = Real World Assets:</strong> Trade real things like
                bank deposits, government bonds, and real estate on blockchain.
                It's like bringing Wall Street to crypto!
              </p>
            </div>
          </div>
          <div className="group relative cursor-pointer rounded-xl border border-white/60 bg-white/70 p-4 shadow-[0_20px_50px_rgba(85,118,0,0.2)] transition-colors hover:border-white sm:col-span-2 md:col-span-1">
            <Zap className="mb-2 h-8 w-8 text-[#9ECF00]" />
            <h4 className="font-bold mb-1">10,000+ TPS</h4>
            <p className="text-sm text-slate-600">
              Institutional-grade settlement speed
            </p>
            <div className="pointer-events-none absolute left-0 right-0 bottom-full z-20 mb-2 rounded-lg border border-slate-200 bg-white p-3 opacity-0 shadow-xl transition-opacity group-hover:opacity-100">
              <p className="text-xs text-slate-600">
                <strong>TPS = Transactions Per Second:</strong> Can handle
                10,000+ trades every second. That's faster than Visa! Your
                trades settle in about 3 seconds.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
