import { FunctionComponent, Key } from 'react';

const data = [
  {
    count: '10',
    countHeading: 'M',
    title: 'Users',
  },
  {
    count: '23',
    countHeading: 'K',
    title: 'Download',
  },
  {
    count: '9',
    countHeading: 'M',
    title: 'Customer',
  },
  {
    count: '12',
    countHeading: 'K',
    title: 'Developer',
  },
];

function StatsSection({ stats }: any) {
  return (
    <section className="p-16 w-full relative">
      <div className="container">
        <div className="flex flex-wrap justify-center">
          {data.map((item: any, idx: Key) => {
            return (
              <div
                key={`s_${idx}`}
                className="relative text-center flex-[0 0 25%] w-full max-w-[25%] px-4"
              >
                <div className="p-3 md:p-0">
                  {/* Counter Item */}
                  <div className="counter-item d-inline-block mb-3">
                    <span className="counter fw-7">{item.count}</span>
                    <span className="fw-7">{item.countHeading}</span>
                  </div>
                  <h5>{item.title}</h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
