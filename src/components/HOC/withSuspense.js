import { Suspense } from "react"




export const SuspenseCustom = (Component) => {
    return () => {
        <Suspense fallback={<img className='' src={Preloader} />}>
            <Component/>
        </Suspense>
    }
}