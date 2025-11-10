import React, { useState } from "react";
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white p-4">
      <div className="max-w-6xl mx-auto mb-8">
        <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Rayls DEX</h1>
              <p className="text-sm text-gray-400">Bridging TradFi & DeFi</p>
            </div>
          </div>
          <div className="flex gap-2 text-sm flex-wrap">
            <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full">
              <span className="font-mono">10,247 TPS</span>
            </div>
            <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full">
              KYC Verified
            </div>
          </div>
        </div>

        <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mb-6">
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-300">
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
            className={`group flex-1 py-4 px-6 rounded-xl font-semibold transition-all relative ${
              activeTab === "public"
                ? "bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/50"
                : "bg-slate-800/50 hover:bg-slate-800"
            }`}
            title="Open to everyone with KYC verification - transparent trading like normal crypto exchanges"
          >
            <div className="flex items-center justify-center gap-2 mb-1">
              <Users className="w-5 h-5" />
              <span>Rayls Public Chain</span>
            </div>
            <p className="text-xs opacity-80">Open to all KYC-verified users</p>
            {activeTab !== "public" && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-slate-800 border border-slate-700 rounded-lg p-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                <p className="text-xs text-gray-300">
                  <strong>Public Chain:</strong> Like any crypto exchange - your
                  trades are visible, all users are verified by KYC. Perfect for
                  regular crypto trading and DeFi apps.
                </p>
              </div>
            )}
          </button>
          <button
            onClick={() => setActiveTab("private")}
            className={`group flex-1 py-4 px-6 rounded-xl font-semibold transition-all relative ${
              activeTab === "private"
                ? "bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg shadow-purple-500/50"
                : "bg-slate-800/50 hover:bg-slate-800"
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
              <div className="absolute top-full left-0 right-0 mt-2 bg-slate-800 border border-slate-700 rounded-lg p-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                <p className="text-xs text-gray-300">
                  <strong>Private Chain:</strong> For banks and big institutions
                  - trades are completely confidential. Think of it like having
                  a private banking network on blockchain.
                </p>
              </div>
            )}
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-slate-800/50 backdrop-blur rounded-2xl border border-slate-700 p-6">
            <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
              <h2 className="text-xl font-bold">Swap</h2>
              {activeTab === "private" && (
                <button
                  onClick={() => setShowPrivacyMode(!showPrivacyMode)}
                  className="group relative flex items-center gap-2 text-sm bg-purple-500/20 text-purple-300 px-3 py-1.5 rounded-lg hover:bg-purple-500/30"
                  title={
                    showPrivacyMode
                      ? "Your trade details are encrypted - only you and regulators can see"
                      : "Click to enable privacy mode"
                  }
                >
                  <Lock className="w-4 h-4" />
                  {showPrivacyMode ? "Shielded" : "Privacy Off"}
                  <div className="absolute top-full right-0 mt-2 bg-slate-800 border border-purple-500/30 rounded-lg p-3 w-64 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                    <p className="text-xs text-gray-300">
                      {showPrivacyMode
                        ? "🔒 Shielded Mode: Your orders are encrypted. Competitors can't see your trades. Only regulators can audit if needed."
                        : "Click to enable privacy mode - your trades will be hidden from other users but remain auditable for compliance."}
                    </p>
                  </div>
                </button>
              )}
            </div>

            <div className="bg-slate-900/50 rounded-xl p-4 mb-4">
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-400">From</span>
                <span className="text-sm text-gray-400">Balance: 10,000</span>
              </div>
              <div className="flex gap-3 flex-wrap">
                <input
                  type="text"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="flex-1 min-w-[120px] bg-transparent text-2xl outline-none"
                />
                <select
                  value={selectedFromToken}
                  onChange={(e) => setSelectedFromToken(e.target.value)}
                  className="bg-slate-700 px-4 py-2 rounded-lg font-semibold outline-none cursor-pointer"
                >
                  {tokens.map((token) => (
                    <option key={token.symbol} value={token.symbol}>
                      {token.symbol}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex justify-center -my-2 relative z-10">
              <button className="bg-slate-700 p-2 rounded-lg hover:bg-slate-600 transition-colors">
                <ArrowDownUp className="w-5 h-5" />
              </button>
            </div>

            <div className="bg-slate-900/50 rounded-xl p-4 mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-400">To</span>
                <span className="text-sm text-gray-400">
                  {activeTab === "private" && showPrivacyMode
                    ? "Balance: Hidden"
                    : "Balance: 5,420"}
                </span>
              </div>
              <div className="flex gap-3 flex-wrap">
                <input
                  type="text"
                  placeholder="0.00"
                  value={amount ? (parseFloat(amount) * 0.98).toFixed(2) : ""}
                  readOnly
                  className="flex-1 min-w-[120px] bg-transparent text-2xl outline-none"
                />
                <select
                  value={selectedToToken}
                  onChange={(e) => setSelectedToToken(e.target.value)}
                  className="bg-slate-700 px-4 py-2 rounded-lg font-semibold outline-none cursor-pointer"
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
              <div className="bg-slate-900/30 rounded-lg p-4 mb-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Exchange Rate</span>
                  <span className="text-right">
                    1 {selectedFromToken} = 0.98 {selectedToToken}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Fee</span>
                  <span>
                    {activeTab === "private" ? "0.05% (Institutional)" : "0.3%"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Settlement Speed</span>
                  <span className="text-green-400">~3 seconds</span>
                </div>
                {activeTab === "private" && (
                  <div className="flex justify-between">
                    <span className="text-gray-400">Privacy Level</span>
                    <span className="text-purple-400 flex items-center gap-1">
                      <Shield className="w-4 h-4" />
                      Enygma Protected
                    </span>
                  </div>
                )}
              </div>
            )}

            <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 py-4 rounded-xl font-bold text-lg transition-all shadow-lg">
              {activeTab === "private" ? "Execute Private Swap" : "Swap Tokens"}
            </button>

            {activeTab === "private" && (
              <p className="text-xs text-center text-gray-400 mt-3">
                Transaction will be settled via Private Network Hub with
                ZK-proof verification
              </p>
            )}
          </div>

          <div className="bg-slate-800/50 backdrop-blur rounded-2xl border border-slate-700 p-6">
            <h3 className="text-lg font-bold mb-4">
              {activeTab === "public" ? "Public Pools" : "Private Pools"}
            </h3>
            <div className="space-y-3">
              {tokens.slice(0, 4).map((token, idx) => (
                <div
                  key={idx}
                  className="group relative bg-slate-900/50 rounded-lg p-3 hover:bg-slate-900/70 cursor-pointer transition-colors"
                  title={token.description}
                >
                  <div className="flex justify-between items-start mb-2 gap-2">
                    <div className="min-w-0 flex-1">
                      <div className="font-semibold truncate">
                        {token.symbol}
                      </div>
                      <div className="text-xs text-gray-400 truncate">
                        {token.name}
                      </div>
                    </div>
                    <div
                      className={`text-xs px-2 py-0.5 rounded flex-shrink-0 ${
                        token.type === "RWA"
                          ? "bg-orange-500/20 text-orange-400"
                          : token.type === "Institutional"
                          ? "bg-purple-500/20 text-purple-400"
                          : token.type === "CBDC"
                          ? "bg-green-500/20 text-green-400"
                          : token.type === "Crypto"
                          ? "bg-cyan-500/20 text-cyan-400"
                          : "bg-blue-500/20 text-blue-400"
                      }`}
                    >
                      {token.type}
                    </div>
                  </div>

                  {/* Tooltip on hover */}
                  <div className="absolute left-0 right-0 top-full mt-2 bg-slate-800 border border-slate-700 rounded-lg p-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                    <p className="text-xs text-gray-300">{token.description}</p>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Liquidity</span>
                    <span className="font-mono">
                      {activeTab === "private" && !showPrivacyMode ? (
                        <span className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {token.liquidity}
                        </span>
                      ) : (
                        token.liquidity
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm mt-1">
                    <span className="text-gray-400">APY</span>
                    <span className="text-green-400 flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      {activeTab === "private" ? "12.4%" : "8.2%"}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {activeTab === "private" && (
              <div className="mt-4 bg-purple-500/10 border border-purple-500/30 rounded-lg p-3">
                <p className="text-xs text-gray-300">
                  <Lock className="w-3 h-3 inline mr-1" />
                  Institutional pools are privacy-protected. Only authorized
                  participants can view full order books.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          <div className="group relative bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-xl p-4 hover:border-blue-500/50 transition-colors cursor-pointer">
            <Shield className="w-8 h-8 text-blue-400 mb-2" />
            <h4 className="font-bold mb-1">Enygma Privacy</h4>
            <p className="text-sm text-gray-400">
              ZK-proof shielded orders with auditable compliance
            </p>
            <div className="absolute left-0 right-0 top-full mt-2 bg-slate-800 border border-blue-500/30 rounded-lg p-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
              <p className="text-xs text-gray-300">
                <strong>What's this?</strong> Advanced encryption that keeps
                your trades private while letting regulators verify everything
                is legal. Best of both worlds!
              </p>
            </div>
          </div>
          <div className="group relative bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-4 hover:border-purple-500/50 transition-colors cursor-pointer">
            <Building2 className="w-8 h-8 text-purple-400 mb-2" />
            <h4 className="font-bold mb-1">RWA Trading</h4>
            <p className="text-sm text-gray-400">
              Tokenized deposits, treasuries, and real estate
            </p>
            <div className="absolute left-0 right-0 top-full mt-2 bg-slate-800 border border-purple-500/30 rounded-lg p-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
              <p className="text-xs text-gray-300">
                <strong>RWA = Real World Assets:</strong> Trade real things like
                bank deposits, government bonds, and real estate on blockchain.
                It's like bringing Wall Street to crypto!
              </p>
            </div>
          </div>
          <div className="group relative bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-xl p-4 hover:border-green-500/50 transition-colors cursor-pointer sm:col-span-2 md:col-span-1">
            <Zap className="w-8 h-8 text-green-400 mb-2" />
            <h4 className="font-bold mb-1">10,000+ TPS</h4>
            <p className="text-sm text-gray-400">
              Institutional-grade settlement speed
            </p>
            <div className="absolute left-0 right-0 top-full mt-2 bg-slate-800 border border-green-500/30 rounded-lg p-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
              <p className="text-xs text-gray-300">
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
