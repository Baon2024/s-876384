
import { Button } from "./ui/button";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "./ui/table";
import { Input } from "./ui/input";
import { Search, FileSpreadsheet, ChevronLeft, ChevronRight } from "lucide-react";

const Hero = () => {
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

        <div className="max-w-[900px] mx-auto border-4 border-gray-200 rounded-xl shadow-xl overflow-hidden bg-white">
          {/* Dashboard Preview */}
          <div className="p-6 flex flex-col gap-6">
            {/* Header */}
            <div className="flex flex-col items-center gap-2">
              <div className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                SPREADSHEET VIEWER
              </div>
              <h2 className="text-3xl font-bold">Mango Spreadsheet Viewer</h2>
              <p className="text-gray-600 max-w-[600px] text-center">
                Upload your Google Spreadsheet or Excel file and view it instantly. No data is sent to servers — everything is processed locally in your browser.
              </p>
            </div>

            {/* File Upload Indicator */}
            <div className="flex items-center justify-between border border-gray-200 rounded-lg p-3 bg-gray-50">
              <div className="flex items-center gap-2">
                <FileSpreadsheet className="text-blue-500" size={20} />
                <span className="text-gray-700">sample data for hackathon.xlsx</span>
              </div>
              <button className="text-gray-500 hover:text-gray-700">
                &times;
              </button>
            </div>

            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input 
                className="pl-10 bg-gray-50 border-gray-200" 
                placeholder="Search spreadsheet..." 
              />
            </div>

            {/* Spreadsheet Table */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead className="w-[80px] font-medium">ID</TableHead>
                    <TableHead className="font-medium">input field 1</TableHead>
                    <TableHead className="font-medium">input field 2</TableHead>
                    <TableHead className="font-medium">input field 3</TableHead>
                    <TableHead className="w-[120px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[1, 2, 3, 4, 5, 6].map((row) => (
                    <TableRow key={row}>
                      <TableCell className="bg-gray-50 font-medium">{row}</TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell>
                        <Button size="sm" className="w-full bg-blue-500 hover:bg-blue-600">
                          Get Data
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between text-sm">
              <div className="text-gray-600">
                Showing 1-6 of 6 rows
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-gray-600">10 rows</span>
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-1 rounded-md hover:bg-gray-100">
                    <ChevronLeft size={16} />
                  </button>
                  <span className="text-gray-600">1 / 1</span>
                  <button className="p-1 rounded-md hover:bg-gray-100">
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Footer */}
            <p className="text-gray-500 text-center text-sm mt-2">
              A beautifully designed spreadsheet viewer. Upload your file to get started.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
