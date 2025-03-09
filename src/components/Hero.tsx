
import { Button } from "./ui/button";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "./ui/table";
import { Input } from "./ui/input";
import { 
  Search, 
  FileSpreadsheet, 
  ChevronLeft, 
  ChevronRight, 
  Undo, 
  Redo, 
  Bold, 
  Italic, 
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Plus
} from "lucide-react";

const Hero = () => {
  // Generate column headers A through Z
  const columnHeaders = Array.from({ length: 20 }, (_, i) => String.fromCharCode(65 + i));
  
  // Generate row numbers 1 through 30
  const rowNumbers = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div className="relative min-h-screen flex items-center justify-center pt-24">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[#F8FAFF]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at center, #E2E8F3 2px, transparent 2px)`,
          backgroundSize: '48px 48px',
          opacity: 0.5
        }}></div>
      </div>

      {/* Floating circles */}
      <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-white border-2 border-gray-200"></div>
      <div className="absolute bottom-1/4 right-1/4 w-3 h-3 rounded-full bg-white border-2 border-gray-200"></div>
      <div className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-white border-2 border-gray-200"></div>
      
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
        <h1 className="text-[80px] leading-[1] font-medium tracking-[-0.02em] text-[#141413] mb-8">
          Save time &<br />money with Mango
        </h1>
        
        <div className="max-w-[600px] mx-auto mb-12">
          <p className="text-xl text-[#141413]/80">
            Spreadsheet viewing, analysis, and management.
            <br />
            One automated platform.
          </p>
        </div>

        <button className="inline-flex items-center gap-2 bg-[#F2FF44] text-[#141413] px-6 py-3 rounded-lg font-medium hover:bg-[#E6FF00] transition-colors mb-12">
          <span className="w-4 h-4">
            <FileSpreadsheet size={16} />
          </span>
          Book a demo
        </button>

        <div className="max-w-[900px] mx-auto border border-gray-200 rounded-xl shadow-xl overflow-hidden bg-white scale-90 transform origin-top">
          {/* Spreadsheet App UI */}
          <div className="flex flex-col">
            {/* Header with logo and buttons */}
            <div className="flex items-center justify-between px-3 py-1.5 border-b border-gray-200">
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 flex items-center justify-center">
                  <span className="text-orange-500 text-lg">🥭</span>
                </div>
                <span className="font-medium text-sm text-gray-800">Mango</span>
              </div>
              <div className="flex items-center gap-1.5">
                <button className="bg-orange-500 text-white px-3 py-0.5 rounded-md text-xs font-medium">
                  Enrich
                </button>
                <button className="border border-gray-300 bg-gray-50 px-3 py-0.5 rounded-md text-xs font-medium flex items-center gap-1">
                  <span>History</span>
                </button>
              </div>
            </div>

            {/* Toolbar */}
            <div className="flex items-center gap-1.5 px-2 py-0.5 border-b border-gray-200 bg-gray-50">
              <div className="flex items-center gap-0.5">
                <button className="p-0.5 rounded hover:bg-gray-200">
                  <Undo size={14} />
                </button>
                <button className="p-0.5 rounded hover:bg-gray-200">
                  <Redo size={14} />
                </button>
              </div>
              <div className="h-3.5 border-r border-gray-300"></div>
              <select className="text-[10px] border border-gray-300 rounded px-1 py-0">
                <option>Times New Roman</option>
              </select>
              <select className="text-[10px] border border-gray-300 rounded px-1 py-0 w-8">
                <option>10</option>
              </select>
              <div className="h-3.5 border-r border-gray-300"></div>
              <div className="flex items-center gap-0.5">
                <button className="p-0.5 rounded hover:bg-gray-200">
                  <Bold size={14} />
                </button>
                <button className="p-0.5 rounded hover:bg-gray-200">
                  <Italic size={14} />
                </button>
                <button className="p-0.5 rounded hover:bg-gray-200">
                  <Underline size={14} />
                </button>
              </div>
              <div className="h-3.5 border-r border-gray-300"></div>
              <div className="flex items-center gap-0.5">
                <button className="p-0.5 rounded hover:bg-gray-200">
                  <AlignLeft size={14} />
                </button>
                <button className="p-0.5 rounded hover:bg-gray-200">
                  <AlignCenter size={14} />
                </button>
                <button className="p-0.5 rounded hover:bg-gray-200">
                  <AlignRight size={14} />
                </button>
              </div>
            </div>

            {/* Formula bar */}
            <div className="flex items-center gap-1.5 px-2 py-0.5 border-b border-gray-200">
              <div className="flex items-center gap-0.5 text-[10px] font-mono bg-gray-100 px-1.5 py-0.5 rounded">
                <span>I8</span>
              </div>
              <div className="flex items-center gap-0.5 text-[10px] font-mono bg-gray-100 px-1.5 py-0.5 rounded">
                <span>fx</span>
              </div>
            </div>

            {/* Spreadsheet Grid */}
            <div className="overflow-auto max-h-[350px]">
              <table className="border-collapse w-full">
                <thead>
                  <tr>
                    <th className="w-8 h-6 bg-gray-100 border border-gray-300 sticky top-0 left-0 z-20"></th>
                    {columnHeaders.map((header) => (
                      <th key={header} className="w-16 min-w-16 h-6 bg-gray-100 border border-gray-300 text-xs text-center font-normal sticky top-0 z-10">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rowNumbers.map((rowNum) => (
                    <tr key={rowNum}>
                      <td className="w-8 bg-gray-100 border border-gray-300 text-xs text-center font-normal sticky left-0 z-10">
                        {rowNum}
                      </td>
                      {columnHeaders.map((colHeader) => {
                        const isHighlighted = (rowNum === 8 && colHeader === 'I');
                        return (
                          <td 
                            key={`${rowNum}-${colHeader}`} 
                            className={`w-16 min-w-16 h-5 border border-gray-200 ${
                              isHighlighted ? 'bg-blue-100' : ''
                            }`}
                          ></td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-3 py-1 border-t border-gray-200 bg-gray-50 text-[10px]">
              <div className="flex items-center gap-1.5">
                <button className="p-0.5 rounded hover:bg-gray-200">
                  <Plus size={12} />
                </button>
                <div className="flex items-center gap-0.5">
                  <button className="px-1.5 py-0.5 bg-gray-200 rounded-l hover:bg-gray-300">Sheet1</button>
                  <button className="px-1.5 py-0.5 bg-gray-100 rounded-r hover:bg-gray-200">Sheet2</button>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <button className="flex items-center gap-0.5 px-1.5 py-0.5 bg-gray-100 rounded hover:bg-gray-200">
                  <span>Spreadsheet Context</span>
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 15l-6-6-6 6" />
                  </svg>
                </button>
                <div className="text-red-500 flex items-center gap-0.5">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span>Failed to initiate any calls</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
