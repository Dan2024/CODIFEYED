import SelectionSortComponent from '../sort-components/SelectionSortComponent'
import InsertionSortComponent from '../sort-components/InsertionSortComponent'
import MergeSortComponent from '../sort-components/MergeSortComponent'
import QuickSortComponent from '../sort-components/QuickSortComponent'
import BubbleSortComponent from '../sort-components/BubbleSortComponent'
import './AlgorithmVisualizer.css'

export default function AlgorithmVisualizer() {
  return (
    <div className='algorithm-card__container'>
      <ul className='algorithm-card__list'>
        {/*  */}

        <li className='algorithm-styling__container'>
          <div className='algorithm-styling__card'></div>
          <div className='algorithm-card'>
            <MergeSortComponent />
            <div className='algorithm-card__info-container'>
              <div className='algorithm-card__title'>Merge Sort</div>
              <div className='algorithm-card__info-text'>
                A merge sort uses a technique called{' '}
                <span className='highlighted-text'>divide and conquer</span>.{' '}
                The list is repeatedly divided into two until all the elements
                are separated individually. Pairs of elements are then{' '}
                <span className='highlighted-text'>
                  compared, placed into order and combined.
                </span>{' '}
                The process is then repeated until the list is recompiled as a
                whole.
              </div>
            </div>
          </div>
        </li>

        <li className='algorithm-styling__container'>
          <div className='algorithm-styling__card'></div>
          <div className='algorithm-card'>
            <div className='algorithm-card__info-container'>
              <div className='algorithm-card__title'>Quick Sort</div>
              <div className='algorithm-card__info-text'>
                Like Merge Sort, QuickSort is a Divide and Conquer algorithm. It
                picks an element as a{' '}
                <span className='highlighted-text'>pivot</span> and{' '}
                <span className='highlighted-text'>partitions</span> the given
                array around the{' '}
                <span className='highlighted-text'>picked pivot</span>. There
                are many different versions of Quick Sort that pick pivot in
                different ways.
              </div>
            </div>
            <QuickSortComponent />
          </div>
        </li>

        <li className='algorithm-styling__container'>
          <div className='algorithm-styling__card'></div>
          <div className='algorithm-card'>
            <BubbleSortComponent />
            <div className='algorithm-card__info-container'>
              <div className='algorithm-card__title'>Bubble Sort</div>
              <div className='algorithm-card__info-text'>
                Bubble sort, sometimes referred to as sinking sort is a sorting
                algorithm that compares{' '}
                <span className='highlighted-text'>two adjacent elements</span>{' '}
                and <span className='highlighted-text'>swaps</span> them until
                they are in the intended order.
              </div>
            </div>
          </div>
        </li>

        <li className='algorithm-styling__container'>
          <div className='algorithm-styling__card'></div>
          <div className='algorithm-card'>
            <div className='algorithm-card__info-container'>
              <div className='algorithm-card__title'>Selection Sort</div>
              <div className='algorithm-card__info-text'>
                Selection sort is a sorting algorithm that selects the{' '}
                <span className='highlighted-text'>smallest</span> element from
                an unsorted list in each iteration and places that element at
                the <span className='highlighted-text'>beginning</span> of the
                unsorted list.
              </div>
            </div>
            <SelectionSortComponent />
          </div>
        </li>

        <li className='algorithm-styling__container'>
          <div className='algorithm-styling__card'></div>
          <div className='algorithm-card'>
            <InsertionSortComponent />
            <div className='algorithm-card__info-container'>
              <div className='algorithm-card__title'>Insertion Sort</div>
              <div className='algorithm-card__info-text'>
                Insertion sort is a simple sorting algorithm that works similar
                to the way you sort playing cards in your hands. The array is
                virtually split into a{' '}
                <span className='highlighted-text'>sorted</span> and an{' '}
                <span className='highlighted-text'>unsorted</span> part. Values{' '}
                from the unsorted part are{' '}
                <span className='highlighted-text'>picked and placed</span> at
                the correct position in the{' '}
                <span className='highlighted-text'>sorted part.</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}
