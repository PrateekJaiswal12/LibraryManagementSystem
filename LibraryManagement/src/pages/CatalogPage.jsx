import CatalogOverview from '@/features/catalog/CatalogOverview';
import CatalogSearch from '@/features/catalog/CatalogSearch';
import React from 'react'
import { useLocation } from 'react-router-dom'


const CatalogPage = () => {

    const location = useLocation();

  return (
    <div className='page'>
        <div className="pageContainer">
            {
                location.search === "" ?
                <CatalogOverview /> :
                <CatalogSearch />
            }
        </div>
      
    </div>
  )
}

export default CatalogPage
