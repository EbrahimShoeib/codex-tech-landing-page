import ButtonLink from 'components/atoms/Button/ButtonLink'
import PageSentence from 'components/molecules/PageSentence'
import PageTemplate from 'components/templates/PageTemplate'
import React from 'react'

const PageNotFound = () => {
  return (
    <>
      <PageTemplate title='Page Not Found'>
        <section className="grid grid-cols-1 place-items-center gap-6" data-aos="zoom-in-up">
          <div className="w-full sm:w-10/12 md:w-8/12 grid grid-cols-1 place-items-center gap-12 lg:w-6/12">
            <div className="text-center ">
              <PageSentence
                badge="خطأ"
                badgeStyle="error"
                title="الصفحة التي تبحث عنها غير موجودة على هذا الموقع، يرجى التحقق مرة أخرى."
                description="النظام لا يستطيع العثور على الصفحة التي تبحث عنها، ربما المسار غير صحيح أو تم حذف الصفحة."
              />
            </div>
            <div className="w-fit">
              <ButtonLink
                value="الرجوع للصفحه الرئيسيه"
                href="/"
                color="white"
                style="light"
              />
            </div>
          </div>
        </section>
      </PageTemplate>
    </>
  )
}

export default PageNotFound
