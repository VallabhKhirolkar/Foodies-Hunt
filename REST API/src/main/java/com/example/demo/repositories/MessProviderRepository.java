package com.example.demo.repositories;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Mess;
import com.example.demo.entities.MessProvider;

@Transactional
@Repository
public interface MessProviderRepository extends JpaRepository<MessProvider, Integer> 
{
	 @Query(value="select * from messowner where approvalstatus = 'Pending'",nativeQuery=true)
	 public List<MessProvider> fetchAllMessforApprovals();
	 
	 @Modifying
	 @Query(value="update messowner set approvalstatus='Approved' where messid=?1",nativeQuery=true)
	 public int approve(int messid);
}
