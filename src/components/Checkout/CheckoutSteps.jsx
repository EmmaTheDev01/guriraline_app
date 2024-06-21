import React from 'react'
import styles from '../../styles/styles'

const CheckoutSteps = ({ active }) => {
    console.log(active);
    return (
        <div className='w-full flex justify-center flex-wrap'>
            <div className="w-[100%] 900px:w-[100%] flex items-center justify-center flex-wrap">
                <div className={`${styles.noramlFlex}`}>
                    <div className={`${styles.cart_button}`}>
                        <span className={`${styles.cart_button_text}`}>1.Shipping</span>
                    </div>
                    <div className={`${active > 1 ? "w-[30px] 800px:w-[40px] h-[4px] !bg-[#29625d]"
                            : "w-[12px] 800px:w-[40px] h-[4px] !bg-[#fed592]"
                        }`} />
                </div>

                <div className={`${styles.noramlFlex} w-[120px]`}>
                    <div className={`${active > 1 ? `${styles.cart_button}` : `${styles.cart_button} !bg-[#fed592]`}`}>
                        <span className={`${active > 1 ? `${styles.cart_button_text}` : `${styles.cart_button_text} !text-[#29625d]`}`}>
                            2.Payment
                        </span>
                    </div>
                </div>

                <div className={`${styles.noramlFlex}`}>
                    <div className={`${active > 3 ? "w-[30px] 800px:w-[45px] h-[4px] !bg-[#29625d]"
                            : "w-[12px] 800px:w-[45px] h-[4px] !bg-[#fed592]"
                        }`} />
                    <div className={`${active > 2 ? `${styles.cart_button}` : `${styles.cart_button} !bg-[#fed592]`}`}>
                        <span className={`${active > 2 ? `${styles.cart_button_text}` : `${styles.cart_button_text} !text-[#29625d]`}`}>
                            3.Success
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutSteps