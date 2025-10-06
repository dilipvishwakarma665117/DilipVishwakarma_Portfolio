'use client';

import { useState, useMemo, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { qaDataDetailed, qaCategories } from '@/lib/qa-data-detailed';
import { Input } from '@/components/ui/input';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '../ui/button';
import { Copy, Check, Search } from 'lucide-react';
import { Card } from '../ui/card';

const ITEMS_PER_PAGE = 10;

export default function DetailedQaList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [visibleItems, setVisibleItems] = useState(ITEMS_PER_PAGE);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const filteredData = useMemo(() => {
    return qaDataDetailed
      .filter((item) =>
        category === 'All' ? true : item.category === category
      )
      .filter((item) =>
        item.question.toLowerCase().includes(searchTerm.toLowerCase())
      );
  }, [searchTerm, category]);

  const handleCopy = (text: string, id: number) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const loadMore = () => {
    setVisibleItems(prev => prev + ITEMS_PER_PAGE);
  }

  const currentData = useMemo(() => filteredData.slice(0, visibleItems), [filteredData, visibleItems]);


  return (
    <section className="container mx-auto px-4 pb-16 md:px-6">
      <Card className="sticky top-16 z-40 bg-background/80 py-4 backdrop-blur-sm p-4 mb-8">
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search questions..."
              className="w-full pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-full md:w-[200px]">
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Categories</SelectItem>
              {qaCategories.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </Card>

      {isClient && (
        <motion.div layout>
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AnimatePresence>
              {currentData.length > 0 ? (
                currentData.map((item, index) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <AccordionItem value={`item-${item.id}`} className="rounded-lg border-none bg-card/50 glass-morphism">
                      <AccordionTrigger className="p-6 text-left font-sans text-lg hover:no-underline">
                        <span className="flex-1 text-left">
                          <span className="font-bold text-primary mr-2">Q{item.id}.</span> {item.question}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-6">
                        <div className="prose prose-invert max-w-none text-muted-foreground font-body whitespace-pre-line">
                          {item.answer}
                          <div className="mt-4 flex justify-end">
                            <Button variant="ghost" size="icon" onClick={() => handleCopy(item.answer, item.id)}>
                              {copiedId === item.id ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                              <span className="sr-only">Copy answer</span>
                            </Button>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))
              ) : (
                  <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-center text-muted-foreground py-16"
                  >
                  <p>No questions found matching your criteria.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </Accordion>
        </motion.div>
      )}
       {isClient && visibleItems < filteredData.length && (
          <div className="mt-8 text-center">
            <Button onClick={loadMore}>Load More</Button>
          </div>
        )}
    </section>
  );
}
