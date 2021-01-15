import { retryWhen, scan, tap, delay } from 'rxjs/operators'
import { Observable } from 'rxjs'

function retryWithDelay(delayTime = 200, count = 1) {
  return input =>
    input.pipe(
      retryWhen(errors =>
        errors.pipe(
          scan((acc, error) => ({ count: acc.count + 1, error }), {
            count: 0,
            error: null
          }),
          tap(current => {
            if (current.count > count) {
              throw current.error
            }
          }),
          delay(delayTime)
        )
      )
    )
}

const rxhttp = axiosExecutor => {
  const observable = new Observable(observer => {
    axiosExecutor()
      .then(res => {
        observer.next(res)
      })
      .catch(err => {
        observer.error(err)
      })
  })

  return observable
}

export { retryWithDelay, rxhttp }
